import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.containerLayout}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer>@ React</Footer>
    </div>
  );
}
