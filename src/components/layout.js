import React from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { Link, useStaticQuery } from "gatsby";

import { rhythm } from "../utils/typography";

export default function Layout({ children, isIndex }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AUSON == LOVE</title>
      </Helmet>
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      {isIndex && (
        <a
          href={`https://auson.love/static/original`}
          target={`_blank`}
          rel={`noopener noreferrer`}
          css={css`
            float: right;
          `}
        >
          Original site
        </a>
      )}
      {children}
    </div>
  );
}
