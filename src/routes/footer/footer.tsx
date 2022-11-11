import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FirstBox>
        <FooterLogoContainer to={"/"}>
          <Logo className="logo" />
        </FooterLogoContainer>
        <p>
          Sign up for texts to be notified about our nest offers on the perfect
          gifts.
        </p>
      </FirstBox>
      <FooterList>
        <FooterLink className="title-link" to={"/"}>
          All products{" "}
        </FooterLink>
        <FooterLink to={"/phones"}>Phones</FooterLink>
        <FooterLink to={"/watch"}>Watch</FooterLink>
        <FooterLink to={"/tablet"}>Tablet</FooterLink>
        <FooterLink to={"/laptop"}>Laptop</FooterLink>
      </FooterList>
      <FooterList>
        <FooterLink className="title-link" to={"/"}>
          Company
        </FooterLink>
        <FooterLink to={"/about"}>About</FooterLink>
        <FooterLink to={"/support"}>Support</FooterLink>
      </FooterList>
      <FooterList>
        <FooterLink className="title-link" to={"/"}>
          Support
        </FooterLink>
        <FooterLink to={"/guide"}>Style Guide</FooterLink>
        <FooterLink to={"/licensing"}>Licensing</FooterLink>
        <FooterLink to={"/changelog"}>Change Log</FooterLink>
        <FooterLink to={"/contact"}>Contact</FooterLink>
      </FooterList>
      <FooterList>
        <FooterLink className="title-link" to={"/"}>
          Follow us
        </FooterLink>
        <FooterLink to={"/"}>Instagram</FooterLink>
        <FooterLink to={"/"}>Facebook</FooterLink>
        <FooterLink to={"/"}>LinkedIn</FooterLink>
        <FooterLink to={"/"}>Youtube</FooterLink>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.div`
  width: 100%;
  padding: 30px 0px;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  background: #f8f9fa;
  gap: 20px;
  padding: 30px 73px 80px 73px;
`;

export const FooterLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  svg {
    width: 170px;
    height: 21px;
  }
`;
export const FirstBox = styled.div`
  p {
    font-size: 16px;
    line-height: 19px;
    margin: 0;
    padding: 0;
    max-width: 304px;
  }
`;

export const FooterList = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  a:first-child {
    font-family: "Readex Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    margin-bottom: 5px;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 17px;
  line-height: 22px;
`;
