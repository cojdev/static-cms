import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "../styles/main.scss";

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <main className="c-main">
        <h1>{frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );
};
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
