import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navb">
      <NavLink 
        to="/"
        end
        style={({ isActive }) => ({
          color: isActive ? "#00f7ff" : "#aaa",
          fontWeight: "bold",
          fontSize: "1.1rem",
          textDecoration: "none",
          transition: "0.3s",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) => ({
          color: isActive ? "#00f7ff" : "#aaa",
          fontWeight: "bold",
          fontSize: "1.1rem",
          textDecoration: "none",
          transition: "0.3s",
        })}
      >
        Products
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "#00f7ff" : "#aaa",
          fontWeight: "bold",
          fontSize: "1.1rem",
          textDecoration: "none",
          transition: "0.3s",
        })}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
