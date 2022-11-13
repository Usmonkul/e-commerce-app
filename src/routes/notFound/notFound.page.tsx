import styled from "styled-components";
import { LgHeading, Paragraph, SectionContainer } from "../../App.styles";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <NotFoundWrapper>
      <span>404</span>
      <LgHeading>Oops! Something wrong…</LgHeading>
      <Paragraph>
        There is something went wrong with this page. Please go back to main
        page to continue using our website or report if there is any feedback.
      </Paragraph>
      <Link to={"/"}>Homepage</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;

const NotFoundWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #201f1f;
  padding: 20px;
  h1 {
    margin-bottom: 41px;
    color: #fff;
  }
  p {
    margin-bottom: 72px;
    max-width: 920px;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
  }
  span {
    font-size: 260px;
    line-height: 315px;
    color: #0765e3;
    margin-bottom: 22px;
  }
  a {
    background-color: #0765e3;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    border-radius: 31px;
    border: 4px solid transparent;
    padding: 17px 32px;

    &:hover {
      background: #fff;
      border: 4px solid #0765e3;
      color: #0765e3;
    }
  }
`;
