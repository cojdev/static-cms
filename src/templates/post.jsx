import React from "react"
import Layout from "../components/Layout";
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <main className="c-main">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`