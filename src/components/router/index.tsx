import Home from "../../pages/Home";
import Users from "../../pages/Users";
import User from "../../pages/User";
import NotFoundPage from "../../pages/NotFoundPage";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post";
import Albums from "../../pages/Albums";
import Photos from "../../pages/Photos";
import Photo from "../../pages/Photo";
import Todos from "../../pages/Todos";
import NotFoundPost from "../../pages/NotFoundPost";
import NotFoundUser from "../../pages/NotFoundUser";


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
    {path: '/posts/not_found_post',element:<NotFoundPost/>},
    {path: '/users/not_found_user',element:<NotFoundUser/>},
    {path: '*', element: <NotFoundPage/>}

]