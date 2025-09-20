import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Sidebar2 } from "../../components/Sidebar/Sidebar2";

export const Home = () => {
  return (
    <div className="">
      <Header />
      {/* <ProductCard/> */}
      <Sidebar/>
      <Sidebar2/>
    </div>
  );
};
