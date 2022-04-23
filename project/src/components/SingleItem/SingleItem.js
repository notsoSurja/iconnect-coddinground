import React from "react";
import styles from "./SingleItem.module.scss";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <div>
          <p className={styles.details__title}>{current.title}</p>
          <p className={styles.details__description}>{current.description}</p>
        </div>
        <div className={styles.checkout__tags}>
        <p className={styles.details__price}>₹ {current.price}</p>
          <button
            onClick={() => addToCart(current.id)}
            className={styles.details__addBtn}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
