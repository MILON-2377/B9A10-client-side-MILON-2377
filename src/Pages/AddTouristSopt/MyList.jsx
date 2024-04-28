import { Link, useLoaderData } from "react-router-dom";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const MyList = () => {
  const allData = useLoaderData();
  const { users } = useAuthProvider();

  const filtersData = allData.filter((data) => users.email === data.email);

  const [fileredData, setFilteredData] = useState(filtersData);

  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristspots/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            data.deletedCount > 0 &&
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

            const remainingData = fileredData.filter(
              (reDta) => reDta._id !== id
            );
            setFilteredData(remainingData);
          });
      }
    });
  };

  return (
    <div className="mt-11 px-8 lg:w-[80%] mx-auto overflow-auto">
      <table className="table">
        <thead className="">
          <tr>
            <th>Country Name</th>
            <th>Spot Name</th>
            <th>Location</th>
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        {fileredData.map((sport) => (
          <>
            <tbody key={sport._id}>
              <tr>
                <th>{sport.countryName}</th>
                <th>{sport.spotName}</th>
                <th>{sport.location}</th>
                <th>
                  <Link to={`/viewdetails/${sport._id}`}>
                    <button className="hover:border hover:border-blue-400 hover:rounded-md px-3 py-2">
                      <FaEye className="text-2xl"></FaEye>
                    </button>
                  </Link>
                </th>
                <th>
                  <Link to={`/update/:${sport._id}`}>
                    <button className="hover:border hover:border-blue-400 hover:rounded-md px-3 py-2">
                      <MdEdit className="text-2xl"></MdEdit>
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handlerDelete(sport._id)}
                    className="hover:border hover:border-blue-400 hover:rounded-md px-3 py-2"
                  >
                    X
                  </button>
                </th>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};

export default MyList;
