import classes from './CartButton.module.css';
import React from 'react';
import CartIcon from '../../Cart/CartIcon';

const CartButton = props => {
  return (
    <button className={`${classes.button}`} onClick={props.onClick}>
      <span className={`${classes.icon}`}>
        <CartIcon/>
      </span>
      <span>{props.children}</span>
      <span className={`${classes.badge}`}>3</span>
    </button>
  )
};

export default CartButton;