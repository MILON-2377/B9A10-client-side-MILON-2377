
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import PlacesToGo from "../Pages/Home/PlacesToGo";
import ThingsToGo from "../Pages/Home/ThingsToGo";
import FindYourDream from "../Pages/Home/FindYourDream";
import PlaneYourTrip from "../Pages/Home/PlaneYourTrip";
import RegisterUser from "../Pages/RegisterUser";
import AuthProvider from "../AuthProvider/AuthProvider";
import LogIn from "../Pages/LogIn";
import AddTouristSpots from "../Pages/AddTouristSopt/AddTouristSpots";
import AllTouristSports from "../Pages/AddTouristSopt/AllTouristSports";
import ViewDetails from "../components/ViewDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/registeruser',
                element: <RegisterUser></RegisterUser>
            },
            {
                path: "/loginuser",
                element: <LogIn></LogIn>
            },
            {
                path: "/destination"
            },
            {
                path: '/placestogo',
                element: <PlacesToGo></PlacesToGo>
            },
            {
                path: "/thingstogo",
                element: <ThingsToGo></ThingsToGo>
            },
            {
                path: "/findyourdream",
                element: <FindYourDream></FindYourDream>
            },
            {
                path: "/planeyourtrip",
                element: <PlaneYourTrip></PlaneYourTrip>
            },
            {
                path: "/addtouristspot",
                element: <AddTouristSpots></AddTouristSpots>
             },
             {
                path: "/alltouristsports",
                element: <AllTouristSports></AllTouristSports>,
                loader: () => fetch("http://localhost:5000/touristspots")
             },
             {
                path: "/viewdetails/:id",
                element: <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/touristspots/${params.id}`)
             }
        ]
    }
])

const Routes = () => {
    return (
        <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    );
};

export default Routes;