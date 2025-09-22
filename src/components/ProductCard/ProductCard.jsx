import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white rounded-md shadow hover:shadow-lg transition p-4">
      {product.isHot && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-5 py-2 r">
          HOT
        </span>
      )}
      <div className="flex justify-center items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full object-contain"
        />
      </div>
      <div className="mt-1">
        <h3 className="font-bold tracking-wider text-gray-800 text-sm md:text-base flex items-center justify-center">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2  text-yellow-400 mt-2">
          {Array.from({ length: product.maxRating }, (_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(product.ratingValue)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
   </div>
        <div className=" flex justify-center items-center text-center mt-2">
          <span className="text-sky-600 font-bold text-lg ">
            ${product.price}
          </span>
          <span className="ml-2 text-gray-400 line-through text-sm">
            ${product.discountPrice}
          </span>
          <span className="ml-2 text-red-500 text-sm font-semibold">
            {product.discountPercent}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
