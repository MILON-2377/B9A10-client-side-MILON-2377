import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import PlacesToGo from "../Pages/Home/PlacesToGo";
import ThingsToGo from "../Pages/Home/ThingsToGo";
import RegisterUser from "../Pages/RegisterUser";
import AuthProvider from "../AuthProvider/AuthProvider";
import LogIn from "../Pages/LogIn";
import AddTouristSpots from "../Pages/AddTouristSopt/AddTouristSpots";
import AllTouristSports from "../Pages/AddTouristSopt/AllTouristSports";
import ViewDetails from "../components/ViewDetails";
import MyList from "../Pages/AddTouristSopt/MyList";
import ProtectedRoute from "../PrivateRoute/ProtectedRoute";
import Update from "../Pages/UpdatePage/Update";
import AddCountries from "../Pages/CreateCountryInfo/AddCountries";
import ViewAllCountries from "../Pages/CreateCountryInfo/ViewAllCountries";
import Home from "../Pages/Home/Home";
import MatchTouristSpot from "../Pages/Home/MatchTouristSpot";
import NotFoundPage from "../notFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://b9a10-server-side-milon-2377-beryl.vercel.app/countries", {
          data: "no-cors"
        })
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registeruser",
        element: <RegisterUser></RegisterUser>,
      },
      
      {
        path: "/destination",
      },
      {
        path: "/placestogo",
        element: <PlacesToGo></PlacesToGo>,
      },
      {
        path: "/thingstogo",
        element: <ThingsToGo></ThingsToGo>,
      },

      {
        path: "/addtouristspot",
        element: (
          <ProtectedRoute>
            <AddTouristSpots></AddTouristSpots>
          </ProtectedRoute>
        ),
      },
      {
        path: "/alltouristsports",
        element: <AllTouristSports></AllTouristSports>,
        loader: () => fetch("https://b9a10-server-side-milon-2377-beryl.vercel.app/spots"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <ProtectedRoute>
            <ViewDetails></ViewDetails>
          </ProtectedRoute>
        ),
        loader: ({params}) => fetch(`https://b9a10-server-side-milon-2377-beryl.vercel.app/spots${params.id}`)
      },
      {
        path: "/mylist",
        element: (
          <ProtectedRoute>
            <MyList></MyList>
          </ProtectedRoute>
        ),
        loader: () => fetch("https://b9a10-server-side-milon-2377-beryl.vercel.app/spots"),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update></Update>
          </ProtectedRoute>
        ),
        
      },
      {
        path: "/addcountries",
        element: <AddCountries></AddCountries>
      },
      {
        path: "/countries",
        element: <ViewAllCountries></ViewAllCountries>
      },
      {
        path: "/country/:country",
        element: <MatchTouristSpot></MatchTouristSpot>,
        loader: () => fetch(`https://b9a10-server-side-milon-2377-beryl.vercel.app/spots`)
      }
    ]
  },
  {
    path: "/notfound",
    element: <NotFoundPage></NotFoundPage>
  }
]);

const Routes = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
};

export default Routes;
