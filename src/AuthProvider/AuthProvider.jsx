
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import PlacesToGo from "../Pages/Home/PlacesToGo";
import ThingsToGo from "../Pages/Home/ThingsToGo";
import FindYourDream from "../Pages/Home/FindYourDream";
import PlaneYourTrip from "../Pages/Home/PlaneYourTrip";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
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
            }
        ]
    }
])

const AuthProvider = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default AuthProvider;