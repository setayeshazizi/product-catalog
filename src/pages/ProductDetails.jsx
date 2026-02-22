import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="details">
        <h2>🚫 Product not found</h2>
        <Link to="/products" className="btn">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="details">
      <h2>{product.name}</h2>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p style={{ marginTop: "15px" }}>{product.description}</p>

      <button
        onClick={() => navigate(-1)}
        className="btn"
        style={{ marginTop: "20px", border: "none", cursor: "pointer" }}
      >
        Go Back
      </button>
    </div>
  );
}

export default ProductDetails;
