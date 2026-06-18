import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar.jsx';

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Cart Items</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-3 mb-3"
          >
            <h5>{item.title}</h5>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;