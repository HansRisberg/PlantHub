import { Home } from "./views/home/Home";
import { HowItWorks } from "./views/howItWorks/HowItWorks";
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
    },
    {
        path: "/how-it-works",
        element: <HowItWorks />
    }
];

export default AppRoutes;
