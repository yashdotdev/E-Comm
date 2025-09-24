import { useState } from "react";

export const PriceFilter = () => {
  const [minVal, setMinVal] = useState(13.99);
  const [maxVal, setMaxVal] = useState(25.99);

  return (
    <div>
      <div className="px-0 py-2 mb-4">
        <h2 className="text-gray-800 text-sm font-semibold tracking-wide uppercase">
          Prices
        </h2>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
        <span>Range:</span>
        <p className="font-medium">
          ${minVal.toFixed(2)} - ${maxVal.toFixed(2)}
        </p>
      </div>
      <div className="relative w-full h-6 mb-2">
        {/* Track */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded">
          <div
            className="absolute h-1 bg-blue-500 rounded"
            style={{
              left: `${(minVal / 30) * 100}%`,
              right: `${100 - (maxVal / 30) * 100}%`,
            }}
          />
        </div>

        {/* Min slider */}
        <input
          type="range"
          min={0}
          max={30}
          step={0.5}
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - 1))
          }
          className="absolute bottom-2.5 w-full h-1 bg-transparent appearance-none cursor-pointer"
        />
        <input
          type="range"
          min={0}
          max={30}
          step={0.5}
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + 1))
          }
          className="absolute bottom-2.5 w-full h-1 bg-transparent appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};
