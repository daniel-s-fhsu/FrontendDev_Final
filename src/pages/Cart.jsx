import FormHeader from "../components/form/FormHeader";
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <div>
      <FormHeader title="Cart" />

      {cart.length === 0 ? (
        <p className="p-4 text-gray-400">Your cart is empty.</p>
      ) : (
        <ul className="p-4 space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="border-b pb-2">
              <p className="font-semibold">{item.name}</p>
              <p>Date: {item.date}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
