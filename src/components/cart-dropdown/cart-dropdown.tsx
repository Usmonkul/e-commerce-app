import React, { useContext } from "react";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 50px;
  z-index: 5;
  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  button {
    margin-top: auto;
    font-size: 12px;
    background-color: black;
    color: white;
  }
`;
