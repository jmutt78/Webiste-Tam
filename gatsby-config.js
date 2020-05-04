const wordpressUrl = `https://tamilee.flywheelsites.com/graphql`

module.exports = {
  siteMetadata: {
    title: ` Tamilee Webb Workout, Fitness & Exercise Products`,
    description: `Tamilee Webb Fitness Instructor, Workout DVDs & Exercise Products. Let Tamilee Webb Help You Get Into Shape. Order Your Tamilee Webb Workout DVDs And Exercise Products`,
    author: `@justinmcintoshs`,
    siteUrl: `https://www.tamileewebb.com/`,
    image: "/images/about.jpeg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphql`,
        fieldName: `wpgraphql`,
        url: wordpressUrl,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-mdbreact`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
