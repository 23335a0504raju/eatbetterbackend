import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Cart.module.css';

const Cart = ({ onClose }) => {
  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>Your cart</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className={styles.cartContent}>
          {/* Empty cart message */}
          <div className={styles.emptyCart}>
            <img src="/images/empty-cart.png" alt="Empty Cart" className={styles.emptyCartImage} />
            <p>Your cart is currently empty</p>
            <button className={styles.continueShoppingButton} onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;