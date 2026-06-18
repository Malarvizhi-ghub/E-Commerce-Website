import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice.js';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow">
      <Link
        to={`/product/${product.id}`}
        className="text-decoration-none text-dark"
      >
        <img
          src={product.image}
          alt={product.title}
          height="250"
          className="card-img-top"
        />

        <div className="card-body">
          <h5>{product.title}</h5>
          <h6>₹{product.price}</h6>
        </div>
      </Link>

      <div className="card-footer bg-white border-0">
        <button
           className="btn btn-primary w-100 add-cart-btn"
          onClick={() => dispatch(addToCart(product))}>
  Add To Cart
</button>
      </div>
    </div>
  );
}

export default ProductCard;