import { products } from "../../data/products";

export const ProductCard = () => {
  return (
    <div className="flex p-4 justify-center">
      <ProductContainer />
    </div>
  );
};

const StarRating = ({ rating, maxRating = 5 }) => {
  const filledStars = Math.round(rating); // round rating to nearest integer
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= filledStars) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ⭐
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          ⭐
        </span>
      );
    }
  }

  return <div>{stars}</div>;
};

const ProductContainer = () => {
  const ans = products.map((product) => {
    return (
      <div
        className="border rounded-lg h-full w-100 mr-6 shadow-sm hover:shadow-md transition"
        key={product.id}
      >
        {/* Image */}
        <div className="relative p-4 pt-2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-46 object-cover rounded-lg hover:scale-107 transition-transform duration-300 ease-in-out"
          />
          {product.isHot && (
            <span className="absolute top-0 left-0 bg-red-500 text-white text-sm px-3 py-2 rounded-lg">
              HOT
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-semibold text-gray-90">
              ${product.discountPrice}
            </span>
            <span className="text-sm line-through text-gray-400">
              ${product.price}
            </span>
            <span className="text-sm text-green-600">
              -{product.discountPercent}%
            </span>
          </div>

          {/* Rating */}
          <div className="text-sm text-gray-500 mt-2">
            <StarRating
              rating={product.ratingValue}
              maxRating={product.maxRating}
            />
            <span>({product.ratingCount})</span>
          </div>
        </div>
      </div>
    );
  });

  return ans;
};

export default ProductCard;
