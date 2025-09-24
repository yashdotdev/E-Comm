import icon1 from "../../assets/hambmenu.png"
import icon2 from "../../assets/icon.png"

export const FilterBelowHero = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow px-4 py-3 rounded-md mt-4">
      <div className="text-gray-600 text-sm font-medium">
        13 Items
      </div>
      <div className="flex items-center space-x-4">

        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Sort By</span>
          <select className="border rounded px-2 py-1 text-sm cursor-pointer">
            <option>Name</option>
            <option>Price</option>
            <option>Latest</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Show</span>
          <select className="border rounded px-2 py-1 text-sm cursor-pointer">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="text-center bg-[#F1F3F4]">
          <img src={icon2} alt="" className="h-full w-full text-blue-400 cursor-pointer"/>
        </button>

        <button className="p-1">
           <img src={icon1} alt="" className="h-full w-full text-blue-400 cursor-pointer"/>
        </button>
      </div>
    </div>
  );
};
