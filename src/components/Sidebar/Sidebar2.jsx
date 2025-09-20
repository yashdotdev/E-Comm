export const Sidebar2 = () => {
  return (
    <div className="hidden lg:block bg-[#F6F7F8] lg:w-1/5 max-w-1/4 mt-4 ml-12 shadow-sm p-6 rounded-md">
      <div className="px-0 py-4 mb-4">
        <h2 className="text-[#22262A] text-xl font-semibold">Prices</h2>
      </div>

      <div className="flex justify-between">
        <label>Ranger:</label>
        <p>$13.99 - $25.99</p>
      </div>

      <input type="range" min={0} max={30} className="w-full"/>
    </div>
  );
};
