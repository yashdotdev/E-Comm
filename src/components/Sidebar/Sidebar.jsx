import { useState } from "react";
import { products } from "../../data/products.js";
import { HotDeals } from "./HotDeals";
import { PriceFilter } from "./PriceFilter";
import { ColorFilter } from "./ColorFilter";
import { BrandFilter } from "./BrandFilter";

export const Sidebar = () => {
  const categories = ["nike", "airmax", "nike", "adidas", "vans", "all-stars", "adidas"];

  const categoryItems = categories.map((category) => ({
    name: category,
    count: products.filter((product) => product.category === category).length,
  }));

  const [showMoreCats, setShowMoreCats] = useState(false);

  return (
    <div className="hidden lg:block lg:w-1/5 max-w-1/4 mt-4 ml-12 overflow max-h-screen">
      <div className="bg-[#F6F7F8] p-6 mb-4 rounded-md">
        <HotDeals
          categories={categories}
          categoryCounts={categoryItems}
          showMoreCats={showMoreCats}
          setShowMoreCats={setShowMoreCats}
        />
      </div>

      <div className="bg-[#F6F7F8] p-6 mb-4">
        <PriceFilter />
      </div>

      <div className="bg-[#F6F7F8] p-6 mb-4">
        <ColorFilter />
      </div>

      <div className="bg-[#F6F7F8] p-6 mb-4">
        <BrandFilter />
      </div>
    </div>
  );
};
