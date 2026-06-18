import Navbar from '../components/Navbar.jsx';
import Hero from "../components/Hero.jsx";
import ProductList from '../components/ProductList.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Footer from '../components/Footer.jsx';
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;