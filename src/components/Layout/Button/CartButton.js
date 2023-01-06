import classes from './CartButton.module.css';
import React, { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const CartButton = props => {

  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.length;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={`${classes.button}`} onClick={props.onClick}>
      <span className={`${classes.icon}`}>
        <CartIcon/>
      </span>
      <span>{props.children}</span>
      {/* <span className={`${classes.badge}`}>3</span> */}
      <span className={`${classes.badge}`}>{numberOfCartItems}</span>
    </button>
  )
};

export default CartButton;