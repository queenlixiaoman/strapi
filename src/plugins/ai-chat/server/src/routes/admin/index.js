export default () => ({
  type: "admin",
  routes: [
    {
      method: "POST",
      path: "/process-prompt",
      handler: "controller.processPrompt",
      config: {
        policies: [],
        auth: {
          strategy: 'admin',
        },
      },
    },
  ],
});