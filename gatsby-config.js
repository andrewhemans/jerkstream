require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
		title: 'jerk indie'
	},
  plugins: [
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: 'UCdxvGA0oTdGV997iMvOuqrQ',
        apiKey: process.env.API_KEY,
        maxVideos: 50 // Defaults to 50
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jerk-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:300,400,700`,
          `Playfair Display\:400,600i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
