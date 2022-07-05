import Home from "../../pages/Home";
import Users from "../../pages/Users";
import User from "../../pages/User";
import NotFoundPage from "../../pages/NotFoundPage";
import Posts from "../../pages/Posts";
import Post from "../../pages/Post";
import Albums from "../../pages/Albums";
import Album from "../../pages/Album";



export const publicRoutes=[
    {path:'/', element:<Home/>},
    {path:'/users', element:<Users/>},
    {path:'/users/id:', element:<User/>},
    {path:'/posts',element: <Posts/>},
    {path:'/posts/:id',element: <Post/>},
    {path:'/albums',element: <Albums/>},
    {path:'/albums/:id',element: <Album/>},
    {path: '*',element: <NotFoundPage/>}

]