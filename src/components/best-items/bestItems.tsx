import styled from "styled-components";
import Button from "../button/buttions";
type BestTypes = {
  title: string;
  info: string;
  imgUrl?: any;
};
const BestItems = ({ title, info, imgUrl }: BestTypes) => {
  return (
    <ListItem>
      <div className="textBox">
        <span>{info}</span>
        <h5>{title}</h5>
        <Button title="Explore" />
      </div>
      <img src={imgUrl} alt="Gatdet image" />
    </ListItem>
  );
};

export default BestItems;

const ListItem = styled.li`
  list-style: none;
  width: 413px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 41px 29px 0px 29px;
  background: #f8f9fa;
  border-radius: 16px;
  text-align: center;
  .textBox {
    margin-bottom: 30px;
  }
  span {
    font-family: "Readex Pro";
    font-size: 13px;
    line-height: 17px;
  }
  h5 {
    font-family: "Readex Pro";
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 30px;
  }
  img {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 250px;
  }
`;
