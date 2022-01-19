const withImages = require('next-images');

module.exports = withImages({
  // i18n: {
  //   locales: ['fr', 'en', 'es', 'it'],
  //   defaultLocale: 'fr',
  // },
  images: {
    domains: ['localhost'],
    deviceSizes: [640, 768, 1024, 1280, 1440, 1536, 2048, 3840],
  },
});
