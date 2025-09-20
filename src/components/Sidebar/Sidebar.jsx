import { NavLink } from "react-router-dom";
import { products } from "../../data/products.js";

export const Sidebar = () => {
  // Count items per category
  const categories = ["nike", "airmax", "adidas", "vans", "all-stars"];

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="hidden lg:block bg-[#F6F7F8] lg:w-1/5 max-w-1/4 mt-4 ml-12 shadow-sm p-6 rounded-md">
      <div className="px-0 py-4 mb-4">
        <h2 className="text-[#22262A] text-xl font-semibold">Hot Deals</h2>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-6 text-md">
        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/${cat}`}
            className={({ isActive }) =>
              `flex justify-between items-center transition-all ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            <span className="capitalize">{cat.replace("-", " ")}</span>
            <span className=" text-gray-400 px-2 py-0.5 rounded text-sm">
              {categoryCounts[cat] || 0}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
