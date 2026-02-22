import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div className="container">
      <h1>🛍 Our Products</h1>
      <p className="sub" style={{ opacity: 0.7, marginTop: "10px" }}>
        Discover our premium collection.
      </p>

      <Outlet />
    </div>
  );
}

export default ProductsLayout;
