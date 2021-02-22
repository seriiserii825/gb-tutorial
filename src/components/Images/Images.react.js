import React from "react";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import img from "../../images/rewind-fixed.jpg";

const getImages = graphql`
    {
        fixed: file(relativePath: { eq: "rewind-fixed.jpg" }) {
            childImageSharp {
                fixed(width: 1600) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid: file(relativePath: { eq: "rewind-fluid.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
export default function Images () {
  const {
    fixed: {
      childImageSharp: {fixed},
    },
    fluid: {
      childImageSharp: {fluid},
    },
  } = useStaticQuery(getImages);
  return (
    <div className="images">
      <img src={img} alt="some"/>
      <Img fluid={fluid}/> <Img fixed={fixed}/>
    </div>
  );
}
