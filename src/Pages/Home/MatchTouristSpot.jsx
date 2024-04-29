
import { useLoaderData, useParams } from "react-router-dom";
import MatchDataLoad from "./MatchDataLoad";
import { useEffect, useState } from "react";

const MatchTouristSpot = () => {
  
  const sports = useLoaderData();
  const {country} = useParams();
  const [spotsData, setSpotData] = useState(sports);

  useEffect(() => {
   const data = spotsData.filter(spot => spot.countryName.toLowerCase() === country.toLowerCase())
    setSpotData(data);

  }, [country])


  return (
    <div className="grid lg:grid-cols-3 gap-4 mx-auto w-[90%] ">
       {
        spotsData.map(spot => <MatchDataLoad key={spot._id} spots ={spot} ></MatchDataLoad>)
       }
    </div>
  );
};

export default MatchTouristSpot;
