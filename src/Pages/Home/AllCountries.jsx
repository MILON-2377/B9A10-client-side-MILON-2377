import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllCountries = ({ countries }) => {
  const { image, countryName, description } = countries;

  return (
    
      <Link className="card card-compact w-full bg-base-100 shadow-xl" to={`/country/${countryName}`}>
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{countryName}</h2>
          <p>{description}</p>
         
        </div>
      </Link>
    
  );
};

AllCountries.propTypes = {
    countries: PropTypes.object
}

export default AllCountries;
