const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Kristy Leung',
    description: 'Portfolio',
    author: '@kristyleung',
    url: 'https://www.kristyleung.com',
    image: '/default-og-image.png',
    siteUrl: `https://www.kristyleung.com`, // used by `gatsby-plugin-sitemap`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-Z01NEP16HB`],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.kristyleung.com`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/templates/Default.js'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-unwrap-images` },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 75,
              showCaptions: true,
              linkImagesToOriginal: false,
              wrapperStyle: ``,
            },
          },
          { resolve: `gatsby-remark-responsive-iframe` },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `babel-plugin-emotion` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: `dev-only`,
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kristy-leung',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
  ],
}
