import { useLoaderData } from "react-router-dom";
import TouristSportl from "../../components/TouristSportl";
import { useState } from "react";

const AllTouristSports = () => {
  const bdTouristSports = useLoaderData();
  const [alldata, setAlldata] = useState(bdTouristSports);
  const [search, setSearch] = useState(null);

//   const hanlderCostSearch = (id) => {
//     setSearch(false);
//     alldata.filter(data => data.)

//   }

  return (
    <div>
      <div  className="w-[60%] flex items-center flex-col gap-3 justify-center mb-14 mt-11 mx-auto">
        <button onMouseEnter={() => setSearch(true)} className="btn btn-secondary ">Search By</button>
        {search ? (
          <ul
            onMouseLeave={() => setSearch(false)}
            className="menu bg-base-200 w-56 rounded-box"
          >
            <li onClick={() => hanlderCostSearch(1)}>
              <a>Average Cost</a>
            </li>
            <li onClick={() => setSearch(false)}>
              <a>Country Name</a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="grid lg:grid-cols-3 lg:w-[80%] mx-auto w-[90%] grid-cols-1 gap-5">
        {alldata.map((sport) => (
          <TouristSportl key={sport._id} sports={sport}></TouristSportl>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSports;
