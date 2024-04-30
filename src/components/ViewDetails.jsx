import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
// import { useEffect, useState } from "react";

const ViewDetails = () => {
  const {id} = useParams();
  console.log(id);
  const singleTourisSport = useLoaderData();
  // useEffect(() => {
  //   fetch(`https://b9a10-server-side-milon-2377.vercel.app/spots/${id}`)
  //   .then(res => res.json)
  //   .then(data => {
      
  //   })
  // },[])

  const { image, spotName, description, location, cost, season, travleTime} =
    singleTourisSport;

  return (
    <div className=" card mt-16 ml-11 lg:card-side bg-base-100  ">
      <div>
        <img className="" src={image} alt="" />
      </div>
      <div className="card-body">
        <div className="flex lg:flex-col items-center lg:items-start gap-4">
          <h1 className="card-title">{spotName}</h1>
          <p className="font-sans text-[18px] font-medium ">
            <span className="font-bold text-blue-500">Seasons:</span> {season}
          </p>
          <div className="flex items-center gap-2">
                <FaLocationDot className="text-xl"></FaLocationDot>
                <p className="text-[18px] font-medium font-serif">{location}</p>
          </div>
        </div>
        <div>
            <p> <span className="text-xl font-serif font-medium">Time: </span> {travleTime}Hours</p>
        </div>
        <p className="">{description}</p>
        <p> <span className="text-xl font-bold font-serif">Cost:</span> {cost}tk</p>
      </div>
    </div>
  );
};

export default ViewDetails;
