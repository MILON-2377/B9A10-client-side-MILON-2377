import Swal from "sweetalert2";

const AddCountries = () => {
  const handlerCountries = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const countryName = form.country.value;
    const description = form.des.value;

    const countrisData = { image, countryName, description };

    fetch("https://b9a10-server-side-milon-2377-gold.vercel.app/countries", {
      method: "post",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(countrisData),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId &&
          Swal.fire({
            title: "Data Stored",
            text: "Your countries data store successfully",
            icon: "success",
          });
          form.reset();
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="card lg:-mt-[200px] w-[90%] mx-auto lg:w-[60%] bg-base-200">
        <form onSubmit={handlerCountries} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="image URL"
              name="image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              placeholder="country name"
              name="country"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="short description"
              name="des"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-slate-800 hover:bg-slate-700 text-white ">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCountries;
