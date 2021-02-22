import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
);

export default HeaderStatic;
