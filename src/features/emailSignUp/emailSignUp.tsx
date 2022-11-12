import { SectionContainer, LgHeading, Paragraph } from "../../App.styles";
import styled from "styled-components";
import SignUpImage from "../../assets/sign-up-img.png";

const EmailSignUp = () => {
  return (
    <EmailSignUpWrapper>
      <div className="textWrapper">
        <LgHeading>Never miss a thing.</LgHeading>
        <Paragraph>
          sign up for texts to be notified about our best offers on the perfect
          gifts.
        </Paragraph>
        <img src={SignUpImage} alt="Apple set" width="233" height="200" />
        <EmailWrapper onSubmit={() => ({})}>
          <input
            className="emailInput"
            type="email"
            required
            placeholder="Your email"
          />
          <input className="submitButton" type="submit" value="Sign Up" />
        </EmailWrapper>
      </div>
    </EmailSignUpWrapper>
  );
};

export default EmailSignUp;

const EmailSignUpWrapper = styled.div`
  background: #dce5e2;
  border-radius: 16px;
  padding: 47px 0px 43px 0px;
  width: min(90%, 935px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 15px 0px;
    object-fit: contain;
  }
`;

const EmailWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  .emailInput {
    background: #dce5e2;
    border: 1px solid #000000;
    border-radius: 54px 0px 0px 54px;
    padding: 16px 0px 17px 32px;
    width: 285px;
    font-size: 14px;
    line-height: 17px;
  }
  .submitButton {
    background: #000000;
    border-radius: 0px 200px 200px 0px;
    padding: 16px 33px 17px 32px;
    color: #fff;
    border: 1px solid transparent;
    font-size: 14px;
    line-height: 17px;
  }
`;
