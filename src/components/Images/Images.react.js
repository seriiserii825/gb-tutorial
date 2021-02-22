import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "fire.jpeg" }) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "fire.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default function Images() {
  const {
    fixed: {
      childImageSharp: { fixed },
    },
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImages);
  return (
    <div className="images">
      <Img fluid={fluid} />
      <Img fixed={fixed} />
    </div>
  );
}
