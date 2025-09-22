export const FilterBelowHero = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow px-4 py-3 rounded-md mt-4">
      <div className="text-gray-600 text-sm font-medium">
        13 Items
      </div>
      <div className="flex items-center space-x-4">

        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Sort By</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Name</option>
            <option>Price</option>
            <option>Latest</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Show</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 14h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
          </svg>
        </button>

        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};
