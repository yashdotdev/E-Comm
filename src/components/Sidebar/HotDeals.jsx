import { NavLink } from "react-router-dom";

export const HotDeals = ({ categories, categoryCounts, showMoreCats }) => {
  return (
    <div className="px-0">
      <h2 className="text-[#22262A] text-xl font-semibold mb-4">Hot Deals</h2>
      <div className="flex flex-col gap-8 text-md py-6">
        {(showMoreCats ? categories : categories.slice(0, 6)).map((cat) => (
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
