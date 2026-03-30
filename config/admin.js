module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: ['http://localhost:7003'],
      async handler(uid, { documentId, locale, status }) {
        if (uid === 'api::home-page.home-page') {
          return `http://localhost:7003/preview?type=home-page&documentId=${documentId}&secret=${env('PREVIEW_SECRET', 'my-secret-key')}&status=${status}`;
        }
        return null;
      },
    },
  },
});
