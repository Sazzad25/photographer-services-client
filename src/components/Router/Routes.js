import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blog from "../pages/Blog/Blog";
import MyReviews from "../pages/MyReviews/MyReviews";
import AddServices from "../pages/AddServices/AddServices";

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
                path: '/',
                element: <Blog></Blog>
            },

            {
                path: '/',
                element: <MyReviews></MyReviews>
            },

            {
                path: '/',
                element: <AddServices></AddServices>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;