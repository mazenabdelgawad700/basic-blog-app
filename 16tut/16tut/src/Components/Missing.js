import { NavLink } from "react-router-dom";

function Missing() {
  return (
    <main className="Missing"> 
      <h2 style={{ color: "red" }}>Page Not Found</h2>
      <p>Well, that's  disappointed!</p>
      <p>
        <NavLink to="/">Visite Our Home Page</NavLink>
      </p>
    </main>
  );
}

export default Missing;
