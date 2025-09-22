import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { FilterBelowHero } from "../../components/FilterBelowHero/FilterBelowHero";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Hero />
          <FilterBelowHero />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
