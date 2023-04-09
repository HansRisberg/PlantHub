import { Home } from "./views/home/Home";
import { Login } from "./views/login/Login";
import { Profile } from "./views/profile/Profile";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/login",
        element: <Login />
    }
];

export default AppRoutes;
