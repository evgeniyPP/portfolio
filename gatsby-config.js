require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    techologies:
      'Redux, Git, Node.js, Svelte, React Native, GatsbyJS, NuxtJS, GraphQL, REST, MongoDB, Express, Firebase, Webpack, Gulp, CSS-препроцессоры (Sass, Less), styled-components, Bootstrap, Webpack, Gulp, французский, арабский (письменный)'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,700,900']
        }
      }
    }
  ]
}
