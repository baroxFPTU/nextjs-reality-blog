import type { ReactElement } from "react";
import styles from "styles/Header.module.scss";

export default function Header(): ReactElement {
  return (
    <header className={styles.HeaderContainer}>
      <h2>Reality blog</h2>
      <p>Keep it simple and reality</p>
    </header>
  );
}
