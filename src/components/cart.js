import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemlist";
import { clearCart } from "../utils/cartslice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is currently empty.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <button
            className="px-4 py-2 mb-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
