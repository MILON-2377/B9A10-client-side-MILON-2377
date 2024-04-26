import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
            : "p-3 text-[18px] hover:rounded-md hover:bg-gray-200 font-sans text-black font-medium"
        }
        to="/destination"
      >
        <li>Destination</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
          isActive
            ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
            : "p-3 text-[18px] hover:rounded-md font-sans hover:bg-gray-200 text-black font-medium"
        } to='/placestogo'>
        <li>Places To Go</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
          isActive
            ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md bg-gray-100"
            : "p-3 text-[18px] hover:rounded-md font-sans hover:bg-gray-200 text-black font-medium"
        } to='/thingstogo'>
        <li>Things To Go</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
          isActive
            ? "px-3 font-medium py-2 border font-sans text-[18px]   text-black  border-blue-300 rounded-md bg-gray-100"
            : "p-3  font-medium hover:rounded-md hover:bg-gray-200 text-[18px]  font-sans text-black "
        } to='/planeyourtrip'>
        <li>Plane Your Trip</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
          isActive
            ? "px-3 font-medium py-2 border text-[18px] font-sans text-black border-blue-300 rounded-md"
            : "p-3  font-medium hover:rounded-md hover:bg-gray-200 text-[18px] text-black font-sans "
        } to='/findyourdream'>
        <li>Find Your Dream</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar w-[70%] mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nav;
