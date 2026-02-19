import { NavLink } from "react-router-dom";

export default function Navbar() {
  const ActiveStyle = {
    color: "yellow",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const ActiveNormal = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className="d-flex gap-4 justify-content-center bg-primary text-light">
      <NavLink
        to="/"
        className="text-light"
        style={({ isActive }) => (isActive ? ActiveStyle : ActiveNormal)}
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className="text-light"
        style={({ isActive }) => (isActive ? ActiveStyle : ActiveNormal)}
      >
        Product
      </NavLink>
    </div>
  );
}
