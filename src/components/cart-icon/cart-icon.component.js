import React from "react";

import { ReactComponent as CartIconPic } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon">
    <CartIconPic className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default CartIcon;
