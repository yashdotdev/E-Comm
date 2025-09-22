import { useCart } from "../../Context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {item.name} (x{item.qty})
              </span>
              <span>${item.price * item.qty}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="mt-4 font-bold">Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};
