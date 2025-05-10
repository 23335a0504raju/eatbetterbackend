import React from 'react';
import styles from '../styles/BestSellers.module.css';

const BestSellers = () => {
  const bestSellerProducts = [
    {
      id: 1,
      image: '/images/image4.jpg',
      title: 'Ultimate Snack Box - Combo of 12 Healthy Snacks',
      rating: 4.8,
      reviews: 463,
      price: '₹999'
    },
    {
      id: 2,
      image: '/Products/image4.jpg',
      title: 'Millet Namkeen Combo - 4*100 grams',
      rating: 4.7,
      reviews: 194,
      price: '₹399'
    },
    {
      id: 3,
      image: '/Products/image4.jpg',
      title: 'Assorted Laddoo Box - 24 Laddoos in 6 Different Flavors',
      rating: 4.8,
      reviews: 64,
      price: '₹599'
    },
    {
      id: 4,
      image: '/Products/image4.jpg',
      title: 'Assorted Laddoo Box - 42 Dry-Fruit Laddoos in 6 Delicious Flavors',
      rating: 4.9,
      reviews: 89,
      price: '₹899'
    }
  ];

  return (
    <section id='bestseller' className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.title}>BETTER SNACKING STARTS HERE!</h2>
        <div className={styles.viewAll}>
          <a href="#view-all">VIEW ALL</a>
        </div>
        
        <div className={styles.productGrid}>
          {bestSellerProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img src={product.image} alt={product.title} />
                {product.id === 1 && (
                  <span className={styles.bestSellerTag}>Best Seller</span>
                )}
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                  <span className={styles.ratingText}>
                    {product.rating} • {product.reviews} reviews
                  </span>
                </div>
                <div className={styles.price}>{product.price}</div>
                <button className={styles.addToCartBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;