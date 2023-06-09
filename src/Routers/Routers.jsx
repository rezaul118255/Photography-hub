import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
// import DashBoard from "../Pages/Dashboard/DashBoard/DashBoard";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Instructors from "../Pages/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashbord from "../Layouts/Dashbord/Dashbord";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrollClass from "../Pages/Dashboard/EnrollClass/EnrollClass";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "instructors",
                element: <Instructors></Instructors>,

            },
            {
                path: "classes",
                element: <Classes></Classes>,

            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>,
            },
            // {
            //     path: "dashboard",
            //     element: <DashBoard></DashBoard>
            // }
        ]
    },
    {
        path: "dashboard",
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: "dashboard/myCart",
                element: <MyCart></MyCart>,
            },
            {
                path: "dashboard/selectedClass",
                element: <SelectedClass></SelectedClass>,
            },
            {
                path: "dashboard/enrollClass",
                element: <EnrollClass></EnrollClass>
            }
        ]
    }
]);