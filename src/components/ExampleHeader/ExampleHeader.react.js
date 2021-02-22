import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ExampleHeader = () => {
  const {
    site: {
      info: {
        title,
        description,
        person: { name, age },
      },
    },
  } = useStaticQuery(graphql`
    {
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
  `);
  return (
    <ul>
      <li>Site title: {title}</li>
      <li>Site description: {description}</li>
      <li>Person name: {name}</li>
      <li>Person: age: {age}</li>
    </ul>
  );
};

export default ExampleHeader;
