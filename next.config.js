module.exports = {
  i18n: {
    locales: ['en-CA', 'pt-BR'],
    defaultLocale: 'en-CA',
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/rss.xml',
        destination: '/api/rss',
      },
    ];
  },
};
