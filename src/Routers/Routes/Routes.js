import Main from "../../layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import GoogleLogin from "../../Pages/GoogleLogin/GoogleLogin";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/google',
                element: <GoogleLogin></GoogleLogin>
            },
            {
                path:'/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/orders',
                element: <Orders></Orders>
            }
        ]
    }
])
export default router;