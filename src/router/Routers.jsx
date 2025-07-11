import { createBrowserRouter } from "react-router";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Counter from "../features/count/Counter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Counter />
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    }
])

export default router;