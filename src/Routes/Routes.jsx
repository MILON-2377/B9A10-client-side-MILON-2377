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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/registeruser",
        element: <RegisterUser></RegisterUser>,
      },
      {
        path: "/loginuser",
        element: <LogIn></LogIn>,
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
        loader: () => fetch("http://localhost:5000/touristspots"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <ProtectedRoute>
            <ViewDetails></ViewDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristspots/${params.id}`),
      },
      {
        path: "/mylist",
        element: (
          <ProtectedRoute>
            <MyList></MyList>
          </ProtectedRoute>
        ),
        loader: () => fetch("http://localhost:5000/touristspots"),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update></Update>
          </ProtectedRoute>
        ),
        
      },
    ],
  },
]);

const Routes = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
};

export default Routes;
