import React, { useState } from 'react';
import { Box, Button, Textarea, Typography, Flex, Divider } from '@strapi/design-system';
import { unstable_useContentManagerContext as useContentManagerContext, useFetchClient } from '@strapi/strapi/admin';

export const AiChatbot = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const { form, contentType } = useContentManagerContext();
  const { post } = useFetchClient();

  const handleSendPrompt = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setMessage('');
    
    try {
      // Send the prompt, schema, and current form data to our backend route
      const schemaAttrs = contentType?.attributes || {};
      const currentValues = form?.values || {};
      const response = await post('/ai-chat/process-prompt', {
        prompt,
        schema: schemaAttrs,
        currentData: currentValues,
      });
      
      const updatedFields = response.data;
      
      // Apply the suggested changes to the form state
      if (updatedFields && typeof updatedFields === 'object') {
        let count = 0;
        
        // Helper to deeply merge while preserving internal Strapi keys (__component, id, etc.)
        const mergePreserving = (original, aiUpdate) => {
          if (Array.isArray(original) && Array.isArray(aiUpdate)) {
            return aiUpdate.map((item, index) => {
              if (original[index]) return mergePreserving(original[index], item);
              return item;
            });
          } else if (original && typeof original === 'object' && aiUpdate && typeof aiUpdate === 'object') {
            const result = { ...original };
            for (const k in aiUpdate) {
              result[k] = mergePreserving(original[k], aiUpdate[k]);
            }
            return result;
          }
          return aiUpdate !== undefined ? aiUpdate : original;
        };

        const currentValues = form?.values || {};

        for (const [key, value] of Object.entries(updatedFields)) {
          // Check if field exists in the schema to avoid errors
          if (schemaAttrs[key]) {
            const attrType = schemaAttrs[key].type;
            
            // For components/dynamic zones, we must preserve __component and id
            const originalValue = currentValues[key];
            const mergedValue = mergePreserving(originalValue, value);

            if (form && typeof form.onChange === 'function') {
              // Use the standard Strapi event-like object signature
              form.onChange({
                target: { name: key, value: mergedValue, type: attrType }
              });
              count++;
            } else if (form && form.setFieldValue) {
              form.setFieldValue(key, mergedValue);
              count++;
            } else {
              console.warn('Form context does not support onChange we know of', form);
            }
          }
        }
        
        if (count > 0) {
          setMessage(`Success! Updated ${count} field(s). Please review and save.`);
        } else {
          setMessage('AI did not return any matching fields to update.');
        }
      }
    } catch (error) {
      console.error('Error processing AI prompt:', error);
      const errorMsg = error.response?.data?.error?.message || error.message || 'Could not process the request. Is OPENAI_API_KEY set in .env?';
      setMessage(`Error: ${errorMsg}`);
    } finally {
      setIsLoading(false);
      setPrompt('');
    }
  };

  return (
    <Box padding={4} background="neutral0" hasRadius shadow="filterShadow">
      <Typography variant="sigma" textColor="neutral600" id="ai-chat-title">
        AI Chatbot Configurator
      </Typography>
      
      <Box paddingTop={2} paddingBottom={4}>
        <Divider />
      </Box>

      <Typography variant="pi" textColor="neutral800">
        Enter natural language instructions (e.g., "Change the Promotional Offers text to XYZ") to automatically update the fields below.
      </Typography>

      <Box paddingTop={4}>
        <Textarea
          placeholder="Type your instruction..."
          name="ai-prompt"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          label="AI Instruction"
        />
      </Box>

      <Flex paddingTop={4} justifyContent="flex-end">
        <Button 
          onClick={handleSendPrompt} 
          loading={isLoading}
          disabled={!prompt.trim()}
          variant="default"
        >
          {isLoading ? 'Processing...' : 'Send'}
        </Button>
      </Flex>

      {message && (
        <Box paddingTop={4}>
          <Typography variant="pi" textColor={message.startsWith('Error') ? 'danger600' : 'success600'}>
            {message}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
