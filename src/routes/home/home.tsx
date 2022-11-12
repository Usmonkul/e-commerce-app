import Hero from "../../components/hero/hero";
import Categories from "../../components/categories/categories";
import Popular from "../../components/popular/popular";
import Best from "../../components/best/best";
import Ideas from "../../components/ideas/ideas";
const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Popular />
      <Best />
      <Ideas />
    </>
  );
};

export default Home;
