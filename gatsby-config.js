module.exports = {
  siteMetadata: {
    title: 'SDS Research Fund',
    siteUrl: 'https://sdsresearchfund.org',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-next',
    'gatsby-plugin-glamor',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-113165972-1",
        anonymize: true,
        respectDNT: true,
        exclude: [],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'imgs',
        path: `${__dirname}/src/imgs/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-embed-video',
          'gatsby-remark-component',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: 'en',
        name: 'SDS Research Fund',
        short_name: 'SDSRF',
        description: 'The Shwachman Diamond Syndrome Research Fund\'s website.',
        start_url: '/',
        display: 'browser',
        orientation: 'portrait',
        background_color: '#F5F6F7',
        theme_color: '#F5F6F7',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    },
  ],
}