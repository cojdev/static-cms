/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteData = require('./content/data/siteData.json');

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteData.siteName,
        short_name: siteData.siteName,
        start_url: `/`,
        icon: `static${siteData.siteLogo}`,
      },
    },
    `gatsby-plugin-sass`
  ]
}
