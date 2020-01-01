import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import "../styles/main.scss";

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const posts = data.allMarkdownRemark.edges.map(item => item.node.frontmatter);

  // layout sections
  const { hero, sections } = frontmatter;

  return (
    <Layout>
      <Hero
        heading={hero.heading}
        tagline={hero.tagline}
        background={hero.background}
      />
      <main className="c-main c-main--home">
        {sections.map((item, index) => (
          <section key={index}>
            <h2>{item.heading}</h2>
            <ReactMarkdown source={item.content} />
          </section>
        ))}
        <h2>My posts</h2>
        <ul>
          {posts.map(item => (
            <li key={item.path}>
              <a href={item.path}>{item.title}</a>
              <div>{item.date}</div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          heading
          tagline
          background
        }
        sections {
          heading
          content
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { path: { regex: "/posts/" } } }) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "D-MMM-YY")
          }
        }
      }
    }
  }
`;