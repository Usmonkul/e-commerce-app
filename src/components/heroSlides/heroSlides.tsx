import styled from "styled-components";
import Button from "../button/buttions";
import hero from "../../assets/hero.png";

type HeroProps = {
  title: string;
  description: string;
  imgUrl?: string;
};

const HeroSlide = ({ title, description, imgUrl }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroLeft>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button title="Explore" />
      </HeroLeft>
      <HeroRight>
        <img src={hero} alt="new tech" />
      </HeroRight>
    </HeroContainer>
  );
};

export default HeroSlide;

const HeroContainer = styled.div`
  width: 100%;
  background: #dce5e2;
  border-radius: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
`;

const HeroLeft = styled.div`
  padding: 146px 0px 0px 56px;
  h2 {
    margin: 0;
    font-family: "Readex Pro";
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 20px;
  }
  p {
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;
  }
`;

const HeroRight = styled.div`
  overflow: hidden;
  background-color: #dce5e2;
`;
