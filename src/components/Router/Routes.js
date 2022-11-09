import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blog from "../pages/Blog/Blog";
import MyReviews from "../pages/MyReviews/MyReviews";
import AddServices from "../pages/AddServices/AddServices";
import AddServ from "../pages/AddServ/AddServ";
import PrivateRoute from "./PrivateRoute";

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
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },

            {
                path: '/addserv',
                element: <PrivateRoute><AddServ></AddServ></PrivateRoute>
            },

            {
                path: '/addservices/:id',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/pServices/${params.id}`)
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