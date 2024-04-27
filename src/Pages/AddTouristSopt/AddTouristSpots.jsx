import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddTouristSpots = () => {

    const {register, handleSubmit, reset}  = useForm();
    
    const handlerAddTourisSpot = (data) => {
        fetch("http://localhost:5000/touristspots", {
            method: "post",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({...data})
        })
        .then(res => res.json())
        .then(data => {
            toast("Your data has been successfully stored in Mongodb database!!")
            reset();
        })
    }

  return (
    <div className="hero w-full bg-base-100">
      <div className="shrink-0 w-full">
        <form onSubmit={handleSubmit((data) => {
            handlerAddTourisSpot(data);
        })} className="card-body lg:w-[50%] h-[87vh] mx-auto border border-blue-300 rounded-lg flex items-center gap-5">
          <div className="flex w-full gap-5">
            <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image URL"
                  {
                    ...register("image")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Spot Name</span>
                </label>
                <input
                  type="text"
                  placeholder="tourist spot name"
                  {
                    ...register("spotName")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Coutry Name</span>
                </label>
                <input
                  type="text"
                  placeholder="country name"
                  {
                    ...register("countryName")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="location"
                  {
                    ...register("location")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Average cost</span>
                </label>
                <input
                  type="Number"
                  placeholder="average cost"
                  {
                    ...register("cost")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Season</span>
                </label>
                <input
                  type="text"
                  placeholder="seasons"
                  {
                    ...register("season")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Travel time</span>
                </label>
                <input
                  type="number"
                  placeholder="travel time"
                  {
                    ...register("travleTime")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total visitors(per/annoum)</span>
                </label>
                <input
                  type="text"
                  placeholder="total visitors"
                  {
                    ...register("visitorsAmount")
                  }
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
                  {
                    ...register("email")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {
                    ...register("name")
                  }
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control -mt-3 w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              {
                ...register("description")
              }
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full mt-3">
            <button className="btn bg-slate-800 hover:bg-slate-700 text-white ">Add</button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddTouristSpots;
