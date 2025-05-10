import React from 'react';
import styles from '../styles/Products.module.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Organic Granola",
      description: "Natural, crunchy blend of nuts and dried fruits",
      price: "$12.99",
      image: "/images/image4.jpg"
    },
    {
      id: 2,
      name: "Protein Bars",
      description: "Healthy snack packed with natural protein",
      price: "$9.99",
      image: "/images/image4.jpg"
    },
    {
      id: 3,
      name: "Green Smoothie",
      description: "Fresh blend of organic vegetables and fruits",
      price: "$8.99",
      image: "/images/image4.jpg"
    }
  ];

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Products</h2>
          <p className={styles.subtitle}>Discover our range of healthy and nutritious options</p>
        </div>
        
        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={product.image} alt={product.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{product.price}</span>
                  <button className={styles.button}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;