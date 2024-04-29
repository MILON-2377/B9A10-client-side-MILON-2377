import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TouristSportl = ({ sports }) => {

  const { image, description, _id, spotName } = sports;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-full"
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spotName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link className="btn bg-slate-800 hover:bg-slate-700 text-white" to={`/viewdetails/${_id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

TouristSportl.propTypes = {
  sports: PropTypes.object
}

export default TouristSportl;
