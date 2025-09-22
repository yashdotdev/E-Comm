import { useState } from "react";
import { products } from "../../data/products.js";
import { HotDeals } from "./HotDeals";
import { PriceFilter } from "./PriceFilter";
import { ColorFilter } from "./ColorFilter";
import { BrandFilter } from "./BrandFilter";

export const Sidebar = () => {
  const categories = ["nike", "airmax", "adidas", "vans", "all-stars"];
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  const [showMoreCats, setShowMoreCats] = useState(false);

  return (
    <div className="hidden lg:block bg-[#F6F7F8] lg:w-1/5 max-w-1/4 mt-4 ml-12 shadow-sm p-6 rounded-md overflow-y-auto max-h-screen">
      <HotDeals
        categories={categories}
        categoryCounts={categoryCounts}
        showMoreCats={showMoreCats}
        setShowMoreCats={setShowMoreCats}
      />
      <PriceFilter />
      <ColorFilter />
      <BrandFilter />
    </div>
  );
};
