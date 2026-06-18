function Sidebar() {
  const categories = [
    "All Products",
    "Men",
    "Women",
    "Shoes",
    "Bags",
    "Accessories",
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Categories</h5>
      </div>

      <ul className="list-group list-group-flush">
        {categories.map((category, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{ cursor: "pointer" }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;