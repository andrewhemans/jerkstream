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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-embedder`],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FCEBED`,
        theme_color: `#0D2D5C`,
        display: `minimal-ui`,
        icon: `src/images/jerk-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:300,400,500,700`,
          `Playfair Display\:400,600i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1Q8B_VN4QN18TNyAeRuyv8yqq6RJEvxXsfeH9TzMlzCg',
      }
    },
    {
      resolve: `gatsby-source-twitch`,
      options: {
        userID: process.env.TWITCH_ID,
        clientID: process.env.TWITCH_CLIENT
      },
    },
// {
//   resolve: "gatsby-source-google-spreadsheet",
//   options: {
//     spreadsheetId: "1Q8B_VN4QN18TNyAeRuyv8yqq6RJEvxXsfeH9TzMlzCg",
//     spreadsheetName: "jerkindieBands",
//     typePrefix: "GoogleSpreadsheet",

//     // The `credentials` are only needed when you need to be authenticated to read the document.
//     // It's an object with the following shape:
//     // {
//     //   client_email: "<your service account email address>",
//     //   private_key: "<the prive key for your service account>"
//     // }
//     //
//     // Refer to googles own documentation to retrieve the credentials for your service account:
//     //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
//     //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
//     //
//     // When you have generated your credentials, it's easiest to refer to them from an environment variable
//     // and parse it directly:
//     // credentials: {
//     //   type: 'service_account',
//     //   project_id: process.env.PROJECT_ID,
//     //   private_key_id: process.env.PRIVATE_KEY_ID,
//     //   private_key: process.env.PRIVATE_KEY,
//     //   client_email: process.env.CLIENT_EMAIL,
//     //   client_id: '111087021075555489401',
//     //   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//     //   token_uri: 'https://oauth2.googleapis.com/token',
//     //   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//     //   client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/jerk-sheets%40jerk-stream.iam.gserviceaccount.com`,
//     // },

//     // Simple node transformation during node sourcing can be achieved by implementing the following functions
//     // - `filterNode`
//     // - `mapNode`
//     //
//     // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
//     // they're added to Gatsby, the default behaviour is to include all nodes:
//     filterNode: () => true,

//     // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
//     // during node sourcing, the default implementation is to return the node as is:
//     mapNode: node => node
//   }
// }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
