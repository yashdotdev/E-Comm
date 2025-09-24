import { useState } from "react";

export const BrandFilter = () => {
  const brands = ["Nike", "Adidas", "Vans", "Siemens", "Puma", "Reebok"];
  const [showBrands, setShowBrands] = useState(false);

  // show 4 items by default
  const visible = showBrands ? brands : brands.slice(0, 4);

  return (
    <div>
      <div className="px-0 py-2 mb-4">
        <h2 className="text-gray-800 text-sm font-semibold tracking-wide uppercase">
          Brand
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-md">
        {visible.map((brand) => (
          <div
            key={brand}
            className="flex justify-between items-center hover:text-blue-500 cursor-pointer"
          >
            <span>{brand}</span>
            <span className="text-gray-400 text-sm">99</span>
          </div>
        ))}

        {/* only show button when total brands > 4 */}
        {brands.length > 4 && (
          <button
            onClick={() => setShowBrands((s) => !s)}
            className="text-md font-semibold text-blue-500 hover:text-blue-700 cursor-pointer self-start"
            aria-expanded={showBrands}
          >
            {showBrands ? "View less" : "View more"}
          </button>
        )}
      </div>
    </div>
  );
};
