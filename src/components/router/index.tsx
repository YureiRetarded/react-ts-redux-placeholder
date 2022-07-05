import Home from "../../pages/Home";
import Users from "../../pages/Users";
import User from "../../pages/User";
import NotFoundPage from "../../pages/NotFoundPage";

export const Routes=[
    {path:'/', element:<Home/>},
    {path:'/users', element:<Users/>},
    {path:'/users/id:', element:<User/>},
    {path: '*',element: <NotFoundPage/>}

]