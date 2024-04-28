import "animate.css";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const UserMenu = () => {
  const { users,userLogOut, setProfileClicked } = useAuthProvider();

  const handlerLotOut = () => {
    userLogOut()
    .then(res => {
      console.log(res.user)
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div onMouseLeave={() => setProfileClicked(false)} className="card absolute border-blue-300 border animate__animated animate__fast animate__slideInRight -left-[400px]  lg:-left-[170px] top-8 z-20  w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1>Name: {users?.displayName}</h1>
        <p>
          <span className="text-[18px] font-medium font-serif ">email:</span>{" "}
          {users?.email}
        </p>
        
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
