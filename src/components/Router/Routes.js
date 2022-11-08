import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";

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