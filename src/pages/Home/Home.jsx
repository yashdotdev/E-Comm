import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";


export const Home = () => {
  return (
    <div className="">
      <Header />
      {/* <ProductCard/> */}
      <Sidebar/>
      
    </div>
  );
};
