import Home from "../../pages/Home";
import Users from "../../pages/Users";
import User from "../../pages/User";
import NotFoundPage from "../../pages/NotFoundPage";
import Posts from "../../pages/Posts";
import Post from "../../pages/Post";
import Albums from "../../pages/Albums";
import Photos from "../../pages/Photos";
import Photo from "../../pages/Photo";
import Todos from "../../pages/Todos";


export const publicRoutes = [
    {path: '/', element: <Home/>},
    {path: '/users', element: <Users/>},
    {path: '/users/:id', element: <User/>},
    {path: '/users/:userId/albums', element: <Albums/>},
    {path: '/users/:userId/albums/:id', element: <Photos/>},
    {path: '/users/:userId/albums/:albumId/:id', element: <Photo/>},
    {path: '/users/:userId/todo', element: <Todos/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <Post/>},

    {path: '*', element: <NotFoundPage/>}

]