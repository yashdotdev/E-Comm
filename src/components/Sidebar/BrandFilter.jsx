import { useState } from "react";

export const BrandFilter = () => {
  const brands = ["Nike", "Adidas", "Vans", "New Balance", "Puma", "Reebok"];
  const [showBrands, setShowBrands] = useState(false);

  return (
    <div>
      <div className="px-0 py-2 mb-4">
        <h2 className="text-gray-800 text-sm font-semibold tracking-wide uppercase">
          Brand
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-md mb-6">
        {(showBrands ? brands : brands.slice(0, 6)).map((brand) => (
          <div
            key={brand}
            className="flex justify-between items-center hover:text-blue-500 cursor-pointer"
          >
            <span>{brand}</span>
            <span className="text-gray-400 text-sm">
              {Math.floor(Math.random() * 100)}
            </span>
          </div>
        ))}
        {brands.length > 6 && (
          <button
            onClick={() => setShowBrands(!showBrands)}
            className="text-sm text-blue-500 hover:underline self-start"
          >
            {showBrands ? "View less" : "View more"}
          </button>
        )}
      </div>
    </div>
  );
};
