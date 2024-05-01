import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { register, handleSubmit, reset } = useForm();
  const [updateData, setUpdateData] = useState();
  const { id } = useParams();
  const idWithoutColon = id.substring(1);

  useEffect(() => {
    fetch(`https://b9a10-server-side-milon-2377-beryl.vercel.app/spots/${idWithoutColon}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateData(data);
      });
  }, [idWithoutColon]);

  const handlerAddTourisSpot = (data) => {
    fetch(`https://b9a10-server-side-milon-2377-beryl.vercel.app/spots/${idWithoutColon}`, {
        method: "put",
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(dat => {
        dat.modifiedCount > 0 && 
        Swal.fire({
            title: "Updated!!!",
            text: "Tourist spot updated successfully",
            icon: "success"
          });
        reset();
    })
  };

  return (
    <div className="hero w-full bg-base-100">
      <div className="shrink-0 w-full">
        <form
          onSubmit={handleSubmit((data) => {
            handlerAddTourisSpot(data);
          })}
          className="card-body lg:w-[50%] mx-auto flex items-center gap-5"
        >
          <div className="flex w-full gap-5">
            <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image URL"
                  {...register("image")}
                  defaultValue={updateData?.image}
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
                  {...register("spotName")}
                  defaultValue={updateData?.spotName}
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
                  {...register("countryName")}
                  defaultValue={updateData?.countryName}
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
                  {...register("location")}
                  defaultValue={updateData?.location}
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
                  {...register("season")}
                  defaultValue={updateData?.season}
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
                  {...register("travleTime")}
                  defaultValue={updateData?.travleTime}
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
                  {...register("visitorsAmount")}
                  defaultValue={updateData?.visitorsAmount}
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
                  {...register("cost")}
                  defaultValue={updateData?.cost}
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
              {...register("description")}
              defaultValue={updateData?.description}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full mt-3">
            <button className="btn bg-slate-800 hover:bg-slate-700 text-white ">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Update;
