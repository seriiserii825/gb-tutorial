import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout/Layout.react";
import styles from "./ProductsTemplate.module.css";

const ProductsTemplate = ({data: {product: {Title, Gallery, content, price}}}) => {
  return (
    <Layout>
      <div className={styles.header}>
        <Link to={`/products`}>Back to products</Link>
        <h1>{Title}</h1>
      </div>
      <div className={styles.wrapper}>
        <img src={`http://localhost:1337${Gallery[0].url}`} alt=""/>
        <div className={styles.content}>
          <p>{content}</p>
          <strong>{price}</strong>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
    query GetProduct($slug: String) {
        product: strapiImmobilees(slug: {eq: $slug}) {
            Title
            Gallery {
                url
            }
            content
            price
        }
    }
`
export default ProductsTemplate
