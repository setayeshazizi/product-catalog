import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        textAlign: "center",
        padding: "10px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "15px",
        backdropFilter: "blur(12px)",
        maxWidth: "800px",
        margin: "50px auto",
        boxShadow: "0 15px 30px rgba(0, 255, 255, 0.2)",
        transition: { duration: 0.1 },
      }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.h1
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: "2.2rem", marginBottom: "15px" }}
      >
        Welcome to Our Store! 🛒
      </motion.h1>

      <motion.p
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{ fontSize: "1rem", opacity: 0.8, marginTop: "10px" }}
      >
        Explore premium products with style and elegance.
        <br />
        Click the button below to see our collection.
      </motion.p>

      <motion.button
        className="home-container"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/products")}
        style={{
          marginTop: "30px",
          padding: "10px 22px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(45deg, #00f7ff, #007bff)",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "0.95rem",
        }}
      >
        Go to Products
      </motion.button>
    </motion.div>
  );
}

export default Home;
