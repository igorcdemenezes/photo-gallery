import styles from "./GalleryPhotos.module.css";
import ProductList from "../../ProductList/ProductList";

export default function GalleryPhotos() {
  return (
    <main>
      <div>
        <h3 className={styles.title}>Galeria</h3>
        <ul className={styles.listStyle}>
          <ProductList />
        </ul>
      </div>
    </main>
  );
}
