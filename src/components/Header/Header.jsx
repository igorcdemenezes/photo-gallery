import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import { Camera } from "lucide-react";

export default function Header() {
  const [inputText, setInputText] = useState("");

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
          placeholder="Pesquise por imagens e coleções..."
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
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
