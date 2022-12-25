import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIconImage } from "../../assets/search-icon.svg";
const Search = () => {
  return (
    <SearchIconContainer>
      <SearchIconImage />
    </SearchIconContainer>
  );
};

export default Search;

export const SearchIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
