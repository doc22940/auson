import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import ArticleList from "../components/article-list";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import "../firebase";
import { getAllPrivate } from "../utils/getPrivate";
import useLoginStatus from "../utils/useLoginStatus";

export default function Home({ data }) {
  const isLoggedIn = useLoginStatus();
  const [privateEdges, setPrivateEdges] = useState(null);

  useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl:
        process.env.NODE_ENV === "development"
          ? "http://localhost:8000/#for-us"
          : "https://auson.love/#for-us",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    });

    return () => {
      ui.delete();
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getAllPrivate().then(privateEdges => setPrivateEdges(privateEdges));
    }
  }, [isLoggedIn]);

  return (
    <Layout isIndex={true}>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css"
        />
      </Helmet>
      <div>
        <h1>
          <span role="img" aria-label="mailbox">
            📬
          </span>{" "}
          Posts
        </h1>
        <ArticleList edges={data.posts.edges} />
        <Link to={`/posts`}>All posts...</Link>
      </div>
      <h1>
        <span role="img" aria-label="letter">
          💌
        </span>{" "}
        Letters
      </h1>
      <ArticleList edges={data.letters.edges} />
      <Link to={`/letters`}>All letters...</Link>
      <h1 id="for-us">
        <span role="img" aria-label="letter">
          🙈
        </span>{" "}
        For Us
      </h1>
      {isLoggedIn == null && <div id="firebaseui-auth-container"></div>}
      {isLoggedIn === false && (
        <p>You do not have sufficient permissions to view this section!</p>
      )}
      {isLoggedIn && !privateEdges && <p>Loading...</p>}
      {privateEdges && <ArticleList edges={privateEdges} />}
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
