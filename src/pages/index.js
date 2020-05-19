import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ArticleList from "../components/article-list";

export default function Home({ data }) {
  return (
    <Layout isIndex={true}>
      <div>
        <h1><span role="img" aria-label="mailbox">📬</span> Posts</h1>
        <ArticleList edges={data.posts.edges} />
        <Link to={`/posts`}>All posts...</Link>
      </div>
      <h1><span role="img" aria-label="letter">💌</span> Letters</h1>
      <ArticleList edges={data.letters.edges} />
      <Link to={`/letters`}>All letters...</Link>
    </Layout>
  );
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
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
    letters: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/letters/" } }
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            by
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
