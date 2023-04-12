import { CreatePlant } from "./views/createPlant/CreatePlant";
import { Home } from "./views/home/Home";
import { HowItWorks } from "./views/howItWorks/HowItWorks";
import { Login } from "./views/login/Login";
import { Profile } from "./views/profile/Profile";
import { RegisterUser } from "./views/registerUser/RegisterUser";

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
        path: "/register",
        element: <RegisterUser />
    },
    {
        path: "/how-it-works",
        element: <HowItWorks />
    },
    {
        path: "/create-plant",
        element: <CreatePlant />
    }
    
];

export default AppRoutes;
