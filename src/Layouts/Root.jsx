import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Home from "../Pages/Home/Home";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;