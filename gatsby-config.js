module.exports = {
  siteMetadata: {
    techologies:
      'Redux, Git, Node.js, Svelte, React Native, GatsbyJS, NuxtJS, GraphQL, REST, MongoDB, Express, Firebase, CSS-препроцессоры (Sass, Less), styled-components, Bootstrap, Webpack, Gulp, французский, арабский (письменный)'
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-less`
  ]
}
