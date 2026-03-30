const controller = ({ strapi }) => ({
  async processPrompt(ctx) {
    try {
      const { prompt, schema, currentData } = ctx.request.body;
      if (!prompt) {
        return ctx.badRequest('Prompt is required');
      }
      ctx.body = await strapi
        .plugin("ai-chat")
        .service("service")
        .processPrompt(prompt, schema, currentData);
    } catch (err) {
      console.error('AI Chatbot Error:', err);
      ctx.throw(500, err.message || 'Internal Server Error');
    }
  },
});

export default controller;