import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Shared/style/header.css"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>E-commerce</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to='/login'>
            <i className="header__icon-link fa-solid fa-arrow-right-to-bracket"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/purchases'>
            <i className="header__icon-purchases fa-sharp fa-solid fa-shop"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/cart'>
            <i className="header__icon-cart fa-solid fa-cart-plus"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
