import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import styled from "styled-components";
import { ProductTypes } from "../productsList/product-list";
import { ReactComponent as CartImage } from "../../assets/cart.svg";

type ProductCart = {
  product: ProductTypes;
};

const ProductCard = ({ product }: ProductCart): React.ReactElement => {
  const { name, price, imageUrl, ram, memory } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img width={200} src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <div className="footer-group">
          <span className="price">${price}</span>
          <span className="cart" onClick={addProductToCart}>
            <CartImage />
          </span>
        </div>
      </div>
      {/* <Button buttonType="inverted">Add to card</Button> */}
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #d9d9d9;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 5px;
    overflow: hidden;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 24px 14px;

    .name {
      width: 100%;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 15px;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      color: #000000;
    }

    .footer-group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      line-height: 22px;
    }
    .cart {
      cursor: pointer;
      svg {
        display: block;
        width: 40px;
        height: 24px;
      }
    }
  }
`;
