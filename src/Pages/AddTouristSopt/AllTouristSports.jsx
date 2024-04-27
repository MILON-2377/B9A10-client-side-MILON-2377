import { useLoaderData } from "react-router-dom";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import TouristSportl from "../../components/TouristSportl";

const AllTouristSports = () => {

    const bdTouristSports = useLoaderData();


    // console.log(bdTouristSports);

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {
                bdTouristSports.map(sport =><TouristSportl key={sport._id} sports={sport}></TouristSportl>)
            }
        </div>
    );
};

export default AllTouristSports;