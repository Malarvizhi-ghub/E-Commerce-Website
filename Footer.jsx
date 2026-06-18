function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4">
            <h5>SHOPMATE</h5>
            <p>
              Your one-stop destination for fashion,
              clothing, accessories, and lifestyle products.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@shopmate.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Chennai, India</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2026 SHOPMATE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;