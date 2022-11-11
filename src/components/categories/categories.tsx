import React from "react";
import styled from "styled-components";
import { LgHeading, Paragraph, SectionContainer } from "../../App.styles";
import LaptopImg from "../../assets/laptop.png";
import watchBand from "../../assets/watchBand.png";
import Phones from "../../assets/phones.png";
import Tablet from "../../assets/tablet.png";

const Categories = () => {
  return (
    <CategoriesWrapper>
      <TextWrapper>
        <LgHeading>Shop our latest offers and categories</LgHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </Paragraph>
      </TextWrapper>
      <CategoriesList>
        <CategoriesListItem className="card-1">
          <img src={LaptopImg} alt="Images" />
          <div className="textWrapper">
            <span className="category-name">Laptops</span>
            <span className="category-title">
              True Laptop <br /> Solutions
            </span>
          </div>
        </CategoriesListItem>
        <CategoriesListItem className="card-2">
          <img src={Phones} alt="Images" />
          <div className="textWrapper">
            <span className="category-name">Phones</span>
            <span className="category-title">
              Your day to day <br /> life
            </span>
          </div>
        </CategoriesListItem>
        <CategoriesListItem className="card-3">
          <div className="textWrapper">
            <span className="category-name">Tablet</span>
            <span className="category-title">
              Empower your <br /> work
            </span>
          </div>
          <img src={Tablet} alt="Images" />
        </CategoriesListItem>

        <CategoriesListItem className="card-4">
          <img
            style={{ height: 270, width: 381 }}
            src={watchBand}
            alt="Images"
          />
          <div className="textWrapper">
            <span className="category-name">Watch</span>
            <span className="category-title">
              Not just <br /> stylish
            </span>
          </div>
        </CategoriesListItem>
      </CategoriesList>
    </CategoriesWrapper>
  );
};

export default Categories;

const CategoriesWrapper = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 59px;
  h1 {
    margin: 0;
  }
  p {
    max-width: 628px;
  }
`;

const CategoriesList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 16px;
  list-style: none;
  .card-1 {
    grid-column: 1 / span 2;
    grid-row: 1 / 3;
    padding: 0px 42px;
    text-align: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .card-2,
  .card-3 {
    grid-row: 1 / span 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 40px;
  }
  .card-4 {
    grid-column: 1 / span 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 42px;
  }
`;

const CategoriesListItem = styled.li`
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
  background: #ffffff;
  border-radius: 32px;
  .textWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .category-name {
    font-size: 15px;
    line-height: 19px;
  }
  .category-title {
    font-family: "Readex Pro";
    font-size: 32px;
    line-height: 38px;
  }
  img {
    display: block;
    width: 100%;
  }
`;
