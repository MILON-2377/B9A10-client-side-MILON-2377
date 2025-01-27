import { Link, NavLink } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import UserMenu from "../components/UserMenu";
import { useState } from "react";

const Nav = () => {
  const { users, isProfileClicked, setProfileClicked } = useAuthProvider();

  const [dropDown, setDropDown] = useState();

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
            : "p-3 text-[18px] hover:rounded-md  font-sans text-black font-medium"
        }
        to="/mylist"
      >
        <li>My Tourist List</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
            : "p-3 text-[18px] hover:rounded-md font-sans  text-black font-medium"
        }
        to="/placestogo"
      >
        <li>Places To Go</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md bg-gray-100"
            : "p-3 text-[18px] hover:rounded-md font-sans  text-black font-medium"
        }
        to="/thingstogo"
      >
        <li>Things To Go</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 font-medium py-2 border font-sans text-[18px]   text-black  border-blue-300 rounded-md bg-gray-100"
            : "p-3  font-medium hover:rounded-md  text-[18px]  font-sans text-black "
        }
        to="/addtouristspot"
      >
        <li>Add Tourist Sport</li>
      </NavLink>

      <div
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
        className="relative"
      >
        <button className="p-3  font-medium hover:rounded-md  text-[18px]  font-sans text-black">
          Tourist Countries
        </button>
        {dropDown ? (
          <ul className="menu py-4 px-3 absolute z-30 bg-base-200 w-56 rounded-box">
            <li
              
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 font-medium py-2 border text-[18px] font-sans text-black border-blue-300 rounded-md"
                    : "p-3  font-medium hover:rounded-md  text-[18px] text-black font-sans "
                }
                to="/addcountries"
              >
                Add Countries
              </NavLink>
            </li>
           
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 font-medium py-2 border text-[18px] font-sans text-black border-blue-300 rounded-md"
                    : "p-3  font-medium hover:rounded-md  text-[18px] text-black font-sans "
                }
                to="/alltouristsports"
              >
                <li>All Tourist Sport</li>
              </NavLink>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );

 

  return (
    <div className="navbar w-[95%] lg:w-[70%] mx-auto bg-base-100">
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
        <Link className="font-sans text-2xl font-bold " to="/">
          VisitNow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {users ? (
          <>
            <div
              onClick={() => setProfileClicked(!isProfileClicked)}
              className={` avatar placeholder hover:cursor-pointer`}
            >
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                {users?.photoURL}
              </div>
            </div>
            {isProfileClicked && (
              <div className="relative ">
                <UserMenu></UserMenu>
              </div>
            )}
          </>
        ) : (
          <>
            <NavLink
              onClick={() => isProfileClicked(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
                  : "p-3 text-[18px]  hover:rounded-md  font-sans text-black font-medium"
              }
              to="/login"
            >
              <li className="list-none">Log In</li>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
