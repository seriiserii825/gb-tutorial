import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import styles from './Products.module.css';
import Link from "gatsby-link";

function Products () {
  const data = useStaticQuery(graphql`
      {
          products: allStrapiImmobilees {
              edges {
                  node {
                      id
                      slug
                      Title
                      Gallery {
                          url
                      }
                      content
                      price
                  }
              }
          }
      }
  `);
  return (
    <div className={styles.products}>
      {data.products.edges.map(item => {
        const {node: {id, slug, Title, Gallery, content, price}} = item;
        return (
          <div className={styles.item} key={id}>
            <div>
              <img src={'http://localhost:1337' + Gallery[0].url} alt={item.title}/>
            </div>
            <div className={styles.content}>
              <h2 className="products__title">{Title}</h2>
              <div className="products__excerpt">{content}</div>
              <div className={styles.footer}>
                <span>Price: <strong>{price}</strong></span> <Link to={'/products/' + slug}>Learn more</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
export default Products;
