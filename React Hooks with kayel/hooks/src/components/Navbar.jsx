import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <NavLink to="/">About</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/posts">Posts</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/contact">Contact</NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
