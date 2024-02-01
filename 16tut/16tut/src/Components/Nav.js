import { NavLink } from "react-router-dom";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useContext } from "react";
import { PostsContext } from "../App";

function Nav() {
  
  const { width, search, setSearch } = useContext(PostsContext);
  
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
      </ul>
    </nav>
  );
}

export default Nav;
