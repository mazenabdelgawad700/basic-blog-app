import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCount, getCount } from "../features/posts/PostsSlice";

const Header = () => {
  // const dispatch = useDispatch();
  // const count = useSelector(getCount);
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="post">Posts Page</NavLink>
          </li>
          <li>
            <NavLink to="user">Users</NavLink>
          </li>
        </ul>
        {/* <button
          onClick={() => dispatch(increaseCount())}
          className="btn btn-primary"
        >
          {" "}
          {count}{" "}
        </button> */}
      </nav>
    </header>
  );
};

export default Header;
