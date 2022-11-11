import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

const Cart = () => {
  return (
    <CartIconContainer>
      <ShoppingIcon />
    </CartIconContainer>
  );
};

export default Cart;

const CartIconContainer = styled.div`
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
`;
