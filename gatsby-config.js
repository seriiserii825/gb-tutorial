/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby site",
    description: "Gatsby site description",
    data: ["item 1", "item2"],
    person: { name: "peter", age: 23 },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
  ],
};
