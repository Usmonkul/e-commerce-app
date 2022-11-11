import styled from "styled-components";
import { SectionContainer, LgHeading, Paragraph } from "../../App.styles";
import BestItems from "../best-items/bestItems";
import appleWatch from "../../assets/AppleWatch.png";
import appleSet1 from "../../assets/AppleSet1.png";
import appleSet2 from "../../assets/AppleSet2.png";
type itemsType = {
  title: string;
  info: string;
  imgUrl: any;
}[];
const ItemsData: itemsType = [
  {
    title: "Latest and gratest",
    info: "Smart light bulb pack",
    imgUrl: appleWatch,
  },
  {
    title: "Latest and gratest",
    info: "Best selling",
    imgUrl: appleSet1,
  },
  {
    title: "Latest and gratest",
    info: "Every product",
    imgUrl: appleSet2,
  },
];
const Best = () => {
  return (
    <BestContainer>
      <div className="textWrapper">
        <LgHeading>See the best around here.</LgHeading>
        <Paragraph>
          Our new Limited Edition Winner Design BESPOKE-4-Door Flex<sup>TM</sup>
        </Paragraph>
      </div>
      <List>
        {ItemsData.map((card) => (
          <BestItems title={card.title} info={card.info} imgUrl={card.imgUrl} />
        ))}
      </List>
    </BestContainer>
  );
};

export default Best;

const BestContainer = styled(SectionContainer)`
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;
