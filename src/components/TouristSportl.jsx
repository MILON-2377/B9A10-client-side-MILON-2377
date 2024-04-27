const TouristSportl = ({ sports }) => {
  console.log(sports);
  const { image, countryName, description, location, spotName } = sports;
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
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default TouristSportl;
