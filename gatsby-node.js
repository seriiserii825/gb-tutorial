const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetProducts {
      products: allStrapiImmobilees {
        nodes {
          slug
        }
      }
    }
  `);
  result.data.products.nodes.forEach((product) => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/ProductsTemplate.js`),
      context: {
        slug: product.slug,
      },
    });
  });
};
