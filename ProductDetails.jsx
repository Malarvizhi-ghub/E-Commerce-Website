import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice.js';
import Navbar from '../components/Navbar.jsx';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find(
      (item) => item.id === Number(id)
    )
  );
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <h2>Product Not Found</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <h4 className="text-primary">
              ₹{product.price}
            </h4>
            <p className="mt-3">
              Premium quality product with modern design
              and excellent comfort. Perfect for daily use.
            </p>
            <button
              className="btn btn-success mt-3"
              onClick={() => dispatch(addToCart(product))} >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;