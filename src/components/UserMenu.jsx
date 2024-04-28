import "animate.css";
import { NavLink } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const UserMenu = () => {
  const { users, setProfileClicked, userLogOut } = useAuthProvider();

  const handlerLotOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card absolute border-blue-300 border animate__animated animate__fast animate__slideInRight -left-[400px]  lg:-left-[170px] top-8 z-20  w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1>Name: {users?.displayName}</h1>
        <p>
          <span className="text-[18px] font-medium font-serif ">email:</span>{" "}
          {users?.email}
        </p>
        <NavLink
          onClick={() => setProfileClicked(false)}
          className={({ isActive }) =>
            isActive
              ? " g-gray-100 px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
              : "p-3 text-[18px] hover:rounded-md hover:bg-gray-100 hover:px-3 hover:py-2 transition-all duration-700 font-sans text-black font-medium"
          }
          to="/addtouristspot"
        >
          Add Tourist Spot
        </NavLink>
        <NavLink
          onClick={() => setProfileClicked(false)}
          className={({ isActive }) =>
            isActive
              ? " g-gray-100 px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
              : "p-3 text-[18px] hover:rounded-md hover:bg-gray-100 hover:px-3 hover:py-2 transition-all duration-700 font-sans text-black font-medium"
          }
          to="/alltouristsports"
        >
          All Tourist Sopts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " g-gray-100 px-3 py-2 border font-sans text-[18px] text-black font-medium border-blue-300 rounded-md"
              : "p-3 text-[18px] hover:rounded-md hover:bg-gray-100 hover:px-3 hover:py-2 transition-all duration-700 font-sans text-black font-medium"
          }
          to={`/mylist`}
        >
          Mylist Page
        </NavLink>
        <button
          onClick={handlerLotOut}
          className="btn bg-slate-800 hover:bg-slate-700 text-white
        "
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
