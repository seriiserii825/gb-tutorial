import React from "react";
import Layout from "../components/Layout/Layout.react";
import { graphql } from "gatsby";

export default function examples({ data }) {
  const {
    site: {
      info: {
        person: { name },
      },
    },
  } = data;
  return (
    <Layout>
      <h1>Layout for name: {name}</h1>
    </Layout>
  );
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        person {
          name
          age
        }
      }
    }
  }
`;
