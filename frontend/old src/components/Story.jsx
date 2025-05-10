import React from 'react';
import styles from '../styles/Story.module.css';

const Story = () => {
  return (
    <section id='story' className={styles.story}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>OUR STORY</h2>
        
        <div className={styles.videoSection}>
          <div className={styles.videoContent}>
            <div className={styles.brandLogo}>
              <img src="images/logo.svg" alt="Eat Better Co" />
            </div>
            <h3 className={styles.title}>Age-Old</h3>
            <div className={styles.founderInfo}>
              <h4 className={styles.founderName}>Mridula Kanoria</h4>
              <p className={styles.founderTitle}>Founder</p>
            </div>
          </div>
          <video 
            className={styles.video}
            controls
            poster="images/click.jpg"
          >
            <source src="vedios/e8eba1ca88b5476d9ee487d2da1979df.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.deliverySection}>
          <h2 className={styles.deliveryTitle}>WE ARE JUST 10 MINUTES AWAY!</h2>
          <div className={styles.deliveryPartners}>
            <img src="/images/blinkit-logo.webp" alt="Blinkit" />
            <img src="/images/instagram-logo.webp" alt="Instamart" />
            <img src="/images/amazon-logo.webp" alt="Amazon" />
            <img src="/images/zepto.avif" alt="Zepto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;