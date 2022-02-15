import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <div>
        <h5>Navbar</h5>
        <button>
          <span></span>
        </button>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/create">Create a recipe</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;