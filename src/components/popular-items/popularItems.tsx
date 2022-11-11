import styled from "styled-components";

type PopularTypes = {
  name: string;
  info: string;
  price: string;
  imgUrl?: any;
};
const PopularItems = ({ name, info, price, imgUrl }: PopularTypes) => {
  return (
    <ListItem>
      <img src={imgUrl} alt="Item" />
      <div className="infoWrapper">
        <h4>{name}</h4>
        <p>{info}</p>
        <span>{price}</span>
      </div>
    </ListItem>
  );
};

export default PopularItems;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 303px;
  .infoWrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  img {
    display: block;
    object-fit: contain;
    height: 270px;
    margin-bottom: 5px;
  }
  h4 {
    font-family: "Readex Pro";
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    margin: 0;
    margin-bottom: 9px;
  }
  p {
    font-size: 14px;
    line-height: 17px;
    color: #4b4b4b;
    max-width: 261px;
    margin: 0;
    margin-bottom: 8px;
  }
  span {
    margin-top: auto;
    font-size: 18px;
    line-height: 22px;
  }
`;
