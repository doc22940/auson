import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

export default function ArticleList({ edges }) {
  return edges.map(({ node }) => (
    <div key={node.id}>
      <Link
        to={node.fields.slug}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {node.frontmatter.title}{" "}
          <span
            css={css`
              color: #555;
            `}
          >
            — {node.frontmatter.date}
          </span>
        </h3>
        {node.frontmatter.by && <p>By: {node.frontmatter.by}</p>}
        <p>{node.excerpt}</p>
      </Link>
    </div>
  ));
}
