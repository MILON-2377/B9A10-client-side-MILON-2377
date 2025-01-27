import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import Swal from "sweetalert2";

const RegisterUser = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuthProvider();
  const location = useLocation();

  const handlerUserRegisrter = ({ email, password, name }) => {
    const user = {email, name}
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        reset();
        fetch("https://b9a10-server-side-milon-2377-gold.vercel.app/users", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then((res) => res.json())
          .then(() => {
            // console.log(data);
            Swal.fire({
              title: "Register Successfull",
              text: "Your account created succssfully",
              icon: "question",
            });
            <Navigate to={`${location}`}></Navigate>
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit((data) => {
              handlerUserRegisrter(data);
            })}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                className="input input-bordered"
                required
              />
              {errors.email && <span>please enter a valid email !</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                {...register("photourl", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                })}
                className="input input-bordered"
                required
              />
              {errors.password && (
                <em className="help-block text-red-400">
                  A minimum 8 characters password contains a combination of{" "}
                  <strong>uppercase and lowercase letter</strong> and{" "}
                  <strong>number</strong>.
                </em>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-slate-800 text-white hover:bg-slate-700 font-sans  ">
                Register
              </button>
            </div>
          </form>
          <div className=" px-[32px] text-[16px] -mt-4 mb-5 gap-2 flex">
            <p>Already have an account?</p>
            <Link
              className="font-sans hover:text-blue-500 hover:underline "
              to="/loginuser"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
