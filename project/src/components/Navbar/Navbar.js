import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {MdOutlineShoppingCart} from 'react-icons/md';
import styles from "./Navbar.module.scss";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h3 className={styles.navbar__logo}>ECOMM WEB</h3>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <MdOutlineShoppingCart className={styles.cart__title} />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
