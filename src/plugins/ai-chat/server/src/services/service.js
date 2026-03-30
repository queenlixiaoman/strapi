import OpenAI from 'openai';

const service = ({ strapi }) => ({
  async processPrompt(prompt, schema, currentData) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_API_BASE,
    });

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant integrated into a Strapi CMS admin panel. 
Your task is to parse a user's natural language instruction and suggest modifications to the current form data.
You MUST reply with ONLY a valid JSON object containing the exact field names (keys) and their new values. Do not include markdown formatting or any other text.
Here is the top-level schema of the form:
${JSON.stringify(schema, null, 2)}

Here is the CURRENT form data (you MUST pay close attention to nested properties and exact keys when suggesting an update to ensure you don't overwrite entire objects with simple strings, and maintain original IDs if modifying nested fields):
${JSON.stringify(currentData || {}, null, 2)}`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
    });

    try {
      const result = JSON.parse(completion.choices[0].message.content);
      return result;
    } catch (e) {
      return {};
    }
  },
});

export default service;