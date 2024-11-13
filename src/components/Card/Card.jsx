/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

export default function Card({ product }) {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={product.photoLink}
          className={styles.image}
          alt={product.productName}
        />
      </div>
      <div className={styles.containerDescription}>
        <p className={styles.productTitle}>{product.productName}</p>
        <div className={styles.containerTag}>
          <p className={styles.productTag}>TAG</p>
        </div>
      </div>
    </div>
  );
}
