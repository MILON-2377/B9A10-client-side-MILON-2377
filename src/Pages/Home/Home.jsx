import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AllCountries from "./AllCountries";

const Home = () => {
  const countriesData = useLoaderData();
  // console.log(countriesData);

  return (
    <div>
      <Banner></Banner>
      <section>
        <div className="">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900 ">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl ">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
            Dive into Your Dream Destinations with Us! From the Enchanting
              Temples of Thailand to the Towering Peaks of Switzerland, Let Us
              Turn Your Wanderlust into Reality. Explore Exotic Cultures,
              Indulge in Culinary Delights, and Create Memories to Last a
              Lifetime Across our Handpicked Selection of Visiting Countries!
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 d"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-700 "
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto mb-12 -mt-20  rounded-lg shadow-md lg:-mt-40">
          <div className="grid grid-cols-2 lg:grid-cols-3 w-[90%] mt-[30px] mx-auto lg:mt-[40px] gap-4 p-6 ">
            {countriesData.map((country) => (
              <AllCountries
                key={country._id}
                countries={country}
              ></AllCountries>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


