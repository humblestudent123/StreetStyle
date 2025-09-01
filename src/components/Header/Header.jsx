import React from "react";
import styles from "./Header.module.scss";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Логотип */}
      <div className={styles.logo}>StreetStyle</div>

      {/* Навигация */}
      <nav className={styles.nav}>
        <a href="#">Мужчинам</a>
        <a href="#">Женщинам</a>
        <a href="#">Детям</a>
        <a href="#">Виды спорта</a>
        <a href="#">Бренды</a>
      </nav>

      {/* Иконки справа */}
      <div className={styles.icons}>
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </header>
  );
};

export default Header;
