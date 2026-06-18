import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard.jsx';

function ProductList() {
  const products = useSelector(
    (state) => state.products.products
  );

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-4 mb-4"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;