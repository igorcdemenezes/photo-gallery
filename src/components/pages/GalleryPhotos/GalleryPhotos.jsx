import styles from "./GalleryPhotos.module.css";
import ProductList from "../../ProductList/ProductList";

export default function GalleryPhotos({ searchText }) {
  return (
    <main>
      <div>
        <h3 className={styles.title}>Galeria</h3>
        <ul className={styles.listStyle}>
          <ProductList searchText={searchText} />
        </ul>
      </div>
    </main>
  );
}
