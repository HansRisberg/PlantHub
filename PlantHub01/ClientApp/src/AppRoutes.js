import { CreatePlant } from "./views/createPlant/CreatePlant";
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
    },
    {
        path: "/createPlant",
        element: <CreatePlant />
    }
    
];

export default AppRoutes;
