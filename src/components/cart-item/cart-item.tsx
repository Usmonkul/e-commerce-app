import React from "react";
import styled from "styled-components";
import { ProductTypes } from "../productsList/product-list";
const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
    object-fit: cover;
  }
  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 10px 10px 20px;
  }
  .name {
    font-size: 14px;
  }
`;
