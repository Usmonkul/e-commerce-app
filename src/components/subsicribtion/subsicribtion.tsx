import styled from "styled-components";
import { SectionContainer, LgHeading } from "../../App.styles";
import SearchInput from "../../features/search-feature/searchInput";
import EmailSignUp from "../../features/emailSignUp/emailSignUp";

const Subsicribtion = () => {
  return (
    <IdeasContainer>
      <LgHeading>Looking for anything else?</LgHeading>
      <SearchInput />
      <EmailSignUp />
    </IdeasContainer>
  );
};

export default Subsicribtion;

const IdeasContainer = styled(SectionContainer)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  place-items: center;
`;
