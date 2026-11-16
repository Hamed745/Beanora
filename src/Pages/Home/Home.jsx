import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Offer from "../../components/Offer/Offer";
import Features from "../../components/Features/Features";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Offer />
      <Features />
    </>
  );
}

export default Home;