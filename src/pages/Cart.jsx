import FormHeader from "../components/form/FormHeader";
import { useDispatch, useSelector } from 'react-redux';
import { incrementEventQuantity, decrementEventQuantity, clearCart } from "../data/cartSlice";
import { db } from "../Firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import BasicButton from "../components/BasicComponents/BasicButton";
import { UserAuth } from "../UserContext";
import { useNavigate } from "react-router";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const { user } = UserAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);
  const handleSubmit = async () => {
    try {
      const purchasesRef = collection(db, "purchases");
  
      const saveOperations = cart.map(item =>
        addDoc(purchasesRef, {
          //User email should be unique - using that to call back history
          name: item.name,
          date: item.date,
          quantity: item.quantity,
          price: item.price * item.quantity,
          timestamp: new Date().toISOString(),
          user: user.email
        })
      );
  
      await Promise.all(saveOperations);
  
      alert("Your purchase has been recorded!");
      dispatch(clearCart());
      //Redirect to success
      navigate("/success");
  
    } catch (error) {
      console.error("Error saving purchases:", error);
      alert("Something went wrong while saving your purchase.");
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <FormHeader title="Cart" />

      {cart.length === 0 ? (
        //If the cart is empty, say so
        <p className="p-4 text-gray-400">Your cart is empty.</p>
      ) : (
        //Show items in the cart along with a increment/decrement for each item
        <div>
          <ul className="p-4 space-y-4">
            {cart.map((item, index) => (
              <li key={`${item.name}-${item.date}`} className="border-b pb-2 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Date: {item.date}</p>
                  <p>Price per Ticket: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>

                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decrementEventQuantity({ name: item.name, date: item.date }))}
                    className="px-2 py-1 text-sm rounded bg-blue-500 text-white 
                     hover:bg-blue-600 hover:scale-105 
                     active:bg-blue-700 active:scale-95 
                     transition duration-150 ease-in-out"
                  >
                    –
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementEventQuantity({ name: item.name, date: item.date }))}
                    className="px-2 py-1 text-sm rounded bg-blue-500 text-white 
                     hover:bg-blue-600 hover:scale-105 
                     active:bg-blue-700 active:scale-95 
                     transition duration-150 ease-in-out"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-8 text-left text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
            
          <BasicButton handleClick={handleSubmit}>Purchase</BasicButton>
        </div>
      )}
    </div>
  );
}

export default Cart;
