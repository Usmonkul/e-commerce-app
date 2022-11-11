import styled from "styled-components";

type Props = {
  title: string;
};
const Button: React.FC<Props> = ({ title }) => {
  return <ButtonWrapper>{title}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.div`
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 200px;
  padding: 14px 63px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
