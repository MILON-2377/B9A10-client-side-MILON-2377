import { useForm } from "react-hook-form";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider } from "firebase/auth";

const LogIn = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logInUser } = useAuthProvider();

  // login with email and password
  const handlerLogInUser = ({ email, password }) => {
    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        reset();
      })
      .catch((error) => console.log(error.message));
  };

  // login with social media
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google log in
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // github login
  const handlerGitHubLogIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(res => {
      console.log(res.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

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
              handlerLogInUser(data);
            })}
            className="card-body"
          >
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
                LogIn
              </button>
            </div>
          </form>
          <div className="flex flex-col mb-4 -mt-3 gap-3">
          <div className="flex flex-col gap-4 items-center px-[32px]">
            <button onClick={googleLogin} className="btn flex w-full">
              <FaGoogle className="text-xl"></FaGoogle>
              <span className="text-xl">Google</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center px-[32px]">
            <button onClick={handlerGitHubLogIn} className="btn flex w-full">
              <FaGithub className="text-xl"></FaGithub>
              <span className="text-xl">Github</span>
            </button>
          </div>
          <div className=" px-[32px] text-[16px] gap-2 flex">
            <p>Do not have an account?</p>
            <Link
              className="font-sans hover:text-blue-500 hover:underline "
              to="/registeruser"
            >
              Register
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
