import styled from "styled-components";
import { SectionContainer, LgHeading, Paragraph } from "../../App.styles";
import { Link } from "react-router-dom";
import IdeasImage from "../../assets/Ideas.png";
import { ReactComponent as Arraw } from "../../assets/arrow-up.svg";

const Ideas = () => {
  return (
    <IdeasContainer>
      <div className="textWrapper">
        <LgHeading>Ideas have a place here</LgHeading>
        <Paragraph>
          Our new Limited Edition Winner Design BESPOKE-4-Door Flex<sup>TM</sup>
        </Paragraph>
      </div>
      <IdeasContent>
        <img src={IdeasImage} alt="Reading a magazine" />
        <div className="ideas_text_content">
          <p className="ideas-text">
            We Make It Easy To Find The Great Design Talent, Easier...
          </p>
          <p className="ideas-text">
            Road Design Handbook For The International Road...
          </p>
          <p className="ideas-text">
            The Best Kept Secrets About Creative People
          </p>
          <p className="ideas-text">
            We Make It Easy To Find The Great Design Talent, Easier...
          </p>
        </div>
      </IdeasContent>
      <SeeAll to={"/ideas"} title="See all">
        See all
        <Arraw />
      </SeeAll>
    </IdeasContainer>
  );
};

export default Ideas;

const IdeasContainer = styled(SectionContainer)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  place-items: center;
  .textWrapper {
    text-align: center;
    padding: 19px 0px 31px 0px;
    margin-bottom: 25px;
  }
`;

const IdeasContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 35px;
  margin-bottom: 74px;
  img {
    width: 100%;
    border-radius: 16px;
  }
  .ideas-text {
    font-size: 24px;
    line-height: 30px;
    color: #000;
    margin-bottom: 23px;
  }
`;

const SeeAll = styled(Link)`
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  img {
    display: block;
  }
`;
