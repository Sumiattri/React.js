import React from "react";
import { products } from "../data/products";
import Product from "./Product";
import Container from "./UI/Container";
import styles from "../CSS/Products.module.css";

function Products() {
  return (
    <Container>
      <h1>Best of ARC</h1>
      <div className={styles.container}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
