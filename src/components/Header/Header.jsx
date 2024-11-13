import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Camera } from "lucide-react";

export default function Header({ searchText, setSearchText }) {
  return (
    <header className={styles.containerHeader}>
      <Link to="/" className={styles.logo}>
        <Camera className={styles.logo} />
      </Link>
      <nav className={styles.containerNav}>
        <ul className={styles.listNav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Pesquise por imagens..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className={styles.inputNav}
        />
        <div className={styles.avatar}>
          <img
            src="https://avatars.githubusercontent.com/u/109683955?v=4"
            alt="Imagem usuário"
          />
        </div>
      </nav>
    </header>
  );
}
