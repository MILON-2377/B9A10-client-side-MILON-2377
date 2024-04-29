import { useLoaderData } from "react-router-dom";
import TouristSportl from "../../components/TouristSportl";

const AllTouristSports = () => {

    const bdTouristSports = useLoaderData();

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {
                bdTouristSports.map(sport =><TouristSportl key={sport._id} sports={sport}></TouristSportl>)
            }
        </div>
    );
};

export default AllTouristSports;