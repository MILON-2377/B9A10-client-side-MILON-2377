import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MatchDataLoad = ({ spots }) => {
  const { spotName, image, countryName, location, cost, season, description, _id } =
    spots;

  return (
    <div>
      <div className="w-full rounded-md shadow-md bg-gray-900 text-gray-100">
        <img
          src={image}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold tracking-wide">
                {spotName}
              </h2>
              <p className="text-xl font-serif ">{countryName}</p>
            </div>
            <p>{location}</p>
            <p>
              {" "}
              <span className="font-bold font-serif text-xl">Season:</span>{" "}
              {season}
            </p>
            <p>
              {" "}
              <span className="font-bold text-xl font-serif">Cost:</span> {cost}
            </p>
            <p className="text-gray-100 font-serif ">{description}</p>
          </div>
          <Link to={`/viewdetails/${_id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

MatchDataLoad.propTypes = {
  spots: PropTypes.object,
};

export default MatchDataLoad;
