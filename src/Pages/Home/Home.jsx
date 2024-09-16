
import Banner from "./Banner";
import AllCountries from "./AllCountries";
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  // const countriesData = useLoaderData();
  // console.log(countriesData);
  // https://b9a10-server-side-milon-2377-gold.vercel.app/countries

  const {data: countriesData} = useQuery({
    queryKey: ["countriesData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/countries");
      return res;
    }
  })
    

  return (
    <div>
      <Banner></Banner>
      <section>
        <div className="">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900 ">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl ">
              We are working with....
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
            Dive into Your Dream Destinations with Us! From the Enchanting
              Temples of Thailand to the Towering Peaks of Switzerland, Let Us
              Turn Your Wanderlust into Reality. Explore Exotic Cultures,
              Indulge in Culinary Delights, and Create Memories to Last a
              Lifetime Across our Handpicked Selection of Visiting Countries!
            </p>
           
          </div>
        </div>
        <div className="w-5/6 mx-auto mb-12 -mt-20  rounded-lg shadow-md lg:-mt-40">
          <div className="grid grid-cols-2 lg:grid-cols-3 w-[90%] mt-[30px] mx-auto lg:mt-[40px] gap-4 p-6 ">
            {countriesData?.map((country) => (
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


