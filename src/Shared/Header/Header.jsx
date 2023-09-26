import { Link } from "react-router-dom";

const Header = () => {
  const menuItem = (
    <>
      <li>
        <Link className="text-white hover:text-orange-300" to="/">
          Coffee Card
        </Link>
      </li>
      <li>
        <Link className="text-white hover:text-orange-300" to="/addcoffee">
          Add Coffee
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-orange-950">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
            Coffee Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
