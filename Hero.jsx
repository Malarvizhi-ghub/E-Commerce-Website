
import banner from '../assets/hero/banner.jpg';
function Hero() {
  return (
    <div className="bg-light p-5 text-center">
        <img
        src={banner}
        alt="Banner"
        className="img-fluid rounded"
      />
      <h1>Fashion Store</h1>
      <p>
        Discover Amazing Fashion Products
      </p>
      <button className="btn btn-danger">
        Shop Now
      </button>
    </div>
  );
}

export default Hero;