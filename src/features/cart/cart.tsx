import styled from "styled-components";
import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <span className="item-count">{cartCount}</span>
    </CartIconContainer>
  );
};

export default Cart;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    display: block;
    width: 40px;
    height: 24px;
  }
  .item-count {
    position: absolute;
    font-size: 10px;
    top: -3px;
    right: -5px;
    font-weight: bold;
    padding: 0px 5px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
