import styled from "styled-components";
import ProductCard from "../product-card/product-card";
import { data } from "../../data/data.js";
import { SecodaryHeading } from "../../App.styles";
export type ProductTypes = {
  name: string;
  price: string;
  memory?: string;
  imageUrl: string;
  ram?: string;
  id: string;
};
const ProductList = () => {
  return (
    <ProdactContainer>
      <SecodaryHeading>Smart Phones</SecodaryHeading>
      <ProductListWrapper>
        {data.phone.map((item: ProductTypes) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </ProductListWrapper>
      <SecodaryHeading>Laptops</SecodaryHeading>
      <ProductListWrapper>
        {data.laptop.map((item: ProductTypes) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </ProductListWrapper>
      <SecodaryHeading>Smart Watch</SecodaryHeading>
      <ProductListWrapper>
        {data.watch.map((item: ProductTypes) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </ProductListWrapper>
    </ProdactContainer>
  );
};

export default ProductList;

const ProdactContainer = styled.section`
  margin-top: 30px;
  padding: 20px 60px;
`;

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;
