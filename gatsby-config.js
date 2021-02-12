const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Kristy Leung',
    description: 'Portfolio',
    author: '@kristyleung',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-Z01NEP16HB`],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/templates/Default.js'),
          blogPost: path.resolve('./src/templates/BlogPost.js'),
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
              wrapperStyle: `margin: 1em 0;`,
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
        autoLabel: process.env.NODE_ENV !== 'production',
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
        background_color: '#f5e3e7',
        theme_color: '#f5e3e7',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
