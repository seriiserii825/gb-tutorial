import React from "react";
import Layout from "../components/Layout/Layout.react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default function examples({ data }) {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = data;
  return (
    <Layout>
      <Img fixed={fixed} />
    </Layout>
  );
}

export const data = graphql`
  query {
    file(relativePath: { eq: "fire.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
