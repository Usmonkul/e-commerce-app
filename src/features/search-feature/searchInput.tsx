import styled from "styled-components";

const keywords = [
  "iPhone",
  "Charger",
  "Gift",
  "Google Pixel 3",
  "Keyboard",
  "13 Pro Max",
  "iPhone 12",
  "Laptop",
  "Mobile",
];

const SearchInput = () => {
  return (
    <SearchWrapper>
      <SearchInputField
        type="search"
        name="search"
        placeholder="Search keyword"
      />
      <div className="search-recommends-wrapper">
        {keywords.map((item) => (
          <SearchRecommends key={item}>{item}</SearchRecommends>
        ))}
      </div>
    </SearchWrapper>
  );
};

export default SearchInput;

const SearchWrapper = styled.div`
  .search-recommends-wrapper {
    max-width: 660px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
    padding: 0px 66px;
    margin-bottom: 61px;
  }
`;

const SearchInputField = styled.input`
  width: 650px;
  padding: 21px 0px 21px 61px;
  background: #f8f9fa;
  border: 1px solid #c5c5c5;
  border-radius: 100px;
  margin: 15px 0px 17px 0px;
`;

const SearchRecommends = styled.button`
  font-size: 14px;
  line-height: 17px;
  background: #ffffff;
  border: 1px solid #c5c5c5;
  border-radius: 200px;
`;
