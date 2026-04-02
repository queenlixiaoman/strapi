module.exports = ({ env }) => ({
  'ai-chat': {
    enabled: true,
    resolve: './src/plugins/ai-chat'
  },
  'content-manager': {
    enabled: true,
    config: {
      preview: {
        contentTypes: [
          {
            uid: 'api::home-page.home-page',
            draft: {
              url: 'http://localhost:7003/preview',
              query: {
                type: 'home-page',
                secret: env('PREVIEW_SECRET', 'my-secret-key'),
              },
            },
            published: {
              url: 'http://localhost:7003/',
            },
          },
        ],
      },
    },
  },
});
