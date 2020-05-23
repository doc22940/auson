const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const ARTICLES_PER_PAGE = 10;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, page }) => {
  const { createPage } = actions;

  // Create posts/letters pages
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  // Create post list page
  const numPagesPosts = Math.ceil(
    result.data.allMarkdownRemark.edges.filter(({ node }) =>
      node.fields.slug.includes("/posts/")
    ).length / ARTICLES_PER_PAGE
  );
  Array.from({ length: numPagesPosts }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: ARTICLES_PER_PAGE,
        skip: i * ARTICLES_PER_PAGE,
        numPages: numPagesPosts,
        currentPage: i + 1,
        section: "/posts/"
      },
    });
  });

    // Create letter list page
    const numPagesLetters = Math.ceil(
      result.data.allMarkdownRemark.edges.filter(({ node }) =>
        node.fields.slug.includes("/letters/")
      ).length / ARTICLES_PER_PAGE
    );
    Array.from({ length: numPagesLetters }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/letters` : `/letters/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: ARTICLES_PER_PAGE,
          skip: i * ARTICLES_PER_PAGE,
          numPages: numPagesLetters,
          currentPage: i + 1,
          section: "/letters/"
        },
      });
    });
};
