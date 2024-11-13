import styles from "./Footer.module.css";

// eslint-disable-next-line react/prop-types
export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <span>{children}</span>
    </footer>
  );
}
