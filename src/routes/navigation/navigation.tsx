import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Cart from "../../features/cart/cart";
import Search from "../../features/search/search";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/products"}>All Products</NavLink>
          <NavLink to={"/solutions"}>Solutions</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/support"}>Support</NavLink>
        </NavLinks>
        {isCartOpen && <CartDropDown />}
        <SearchCartContainer>
          <Search />
          <Cart />
        </SearchCartContainer>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

// Styles

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px 40px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 170px;
  padding: 30px 0px;
  svg {
    width: 170px;
    height: 21px;
  }
`;
export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  padding: 10px 15px;
`;

export const SearchCartContainer = styled.div`
  display: flex;
  align-items: center;
`;
