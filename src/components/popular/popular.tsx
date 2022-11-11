import React, { ReactElement } from "react";
import { SectionContainer, LgHeading, Paragraph } from "../../App.styles";
import styled from "styled-components";
import MacPro from "../../assets/MacBookPro13.png";
import MacAir from "../../assets/MacBoolAirM1.png";
import Galaxy from "../../assets/SmartGalaxyWatch3.png";
import iPad from "../../assets/iPad.png";
import PopularItems from "../popular-items/popularItems";

type itemsType = {
  name: string;
  info: string;
  price: string;
  imgUrl: any;
}[];
const ItemsData: itemsType = [
  {
    name: "MacBook Pro 13",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    price: "$ 1,200.00 USD",
    imgUrl: MacPro,
  },
  {
    name: "Smart Galaxy Watch 3",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    price: "$ 199.00 USD",
    imgUrl: Galaxy,
  },
  {
    name: "MacBook Air M1",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    price: "$ 1,009.00 USD",
    imgUrl: MacAir,
  },
  {
    name: "iPad",
    info: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    price: "$ 610.00 USD",
    imgUrl: iPad,
  },
];

const Popular = () => {
  return (
    <PopularContainer>
      <div className="textWrapper">
        <LgHeading>Save on our most selled items.</LgHeading>
        <Paragraph>
          Our new Limited Edition Winner Design BESPOKE-4-Door Flex<sup>TM</sup>
        </Paragraph>
      </div>
      <List>
        {ItemsData.map((card) => {
          return (
            <PopularItems
              key={card.name}
              name={card.name}
              info={card.info}
              price={card.price}
              imgUrl={card.imgUrl}
            />
          );
        })}
      </List>
    </PopularContainer>
  );
};

export default Popular;

const PopularContainer = styled(SectionContainer)`
  padding: 30px;
  .textWrapper {
    text-align: center;
    padding: 19px 0px 31px 0px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
`;
