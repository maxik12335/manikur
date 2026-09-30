import React, { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [burger, setBurger] = useState("burger_close"); // тут была опечатка borger → burger

  const toggleBurger = () => {
    setBurger("burger_open");
  };

  // Если нужно отдельно закрывать по крестику/ссылке — можно вынести в отдельную функцию
  const closeBurger = () => {
    setBurger("burger_close");
  };

  if (burger === "burger_close") {
    return (
      <div className={classes.navbar}>
        <div className="container">
          <div className={classes.navbar__content}>
            <div className={classes.logo}>BEAUTY BY</div>

            {/* Кнопка бургера с событием */}
            <button
              type="button"
              className={classes.burger}
              aria-label="Открыть меню"
              onClick={toggleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={classes.navbar__links}>
              <a className={classes.navbar__link} href="#reviews">отзывы</a>
              <a className={classes.navbar__link} href="#works">работы</a>
              <a className={classes.navbar__link} href="#prices">цены</a>
              <a className={classes.navbar__link} href="#contacts">контакты</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  // Состояние burger_open — показываем полноэкранное меню
  return (
    <div className={classes.burger__menu}>
      <div className={classes.container}>
        <div className={classes.navbar__content}>
          <div className={classes.menu_box}>
            <div className={classes.logo}>BEAUTY BY</div>

            {/* Кнопка закрытия (крестик) */}
            <button
              type="button"
              className={classes.burger_close}
              aria-label="Закрыть меню"
              onClick={closeBurger}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className={classes.navbar__links_full}>
            <a className={classes.navbar__link_full} href="#reviews" onClick={closeBurger}>
              отзывы
            </a>
            <a className={classes.navbar__link_full} href="#works" onClick={closeBurger}>
              работы
            </a>
            <a className={classes.navbar__link_full} href="#prices" onClick={closeBurger}>
              цены
            </a>
            <a className={classes.navbar__link_full} href="#contacts" onClick={closeBurger}>
              контакты
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
