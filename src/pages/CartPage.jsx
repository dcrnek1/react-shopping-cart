import { useCartContext } from "../contexts/cartContext";

export default function CartPage() {
  const { cart, removeCartItem } = useCartContext();

  return (
    <div className="container mx-auto p-4 max-w-7xl w-full">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {Object.values(cart).map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeCartItem(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}