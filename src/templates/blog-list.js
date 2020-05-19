import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ArticleList from "../components/article-list";

export default function BlogList({ data, pageContext }) {
  const { currentPage, numPages, section } = pageContext;

  return (
    <Layout>
      <div>
        <ArticleList edges={data.posts.edges} />
        {Array.from({ length: numPages }, (_, i) =>
          i + 1 !== currentPage ? (
            <span key={`pagination-number${i + 1}`}>
              <Link
                to={`${section}${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>{" "}
            </span>
          ) : (
            <span>{i + 1 + " "}</span>
          )
        )}
      </div>
    </Layout>
  );
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!, $section: String!) {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $section } }
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
