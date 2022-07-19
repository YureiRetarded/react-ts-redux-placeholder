import Home from "../../pages/Home";
import Users from "../../pages/Users";
import User from "../../pages/User";
import NotFoundPage from "../../pages/NotFoundPage";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post";
import Photos from "../../pages/Photos";
import Photo from "../../pages/Photo";
import NotFoundPost from "../../pages/NotFoundPost";
import NotFoundUser from "../../pages/NotFoundUser";


export const publicRoutes = [
    {path: '/react-ts-redux-placeholder/', element: <Home/>},
    {path: '/react-ts-redux-placeholder/users', element: <Users/>},
    {path: '/react-ts-redux-placeholder/users/:id', element: <User/>},
    {path: '/react-ts-redux-placeholder/users/:userId/album/:albumId', element: <Photos/>},
    {path: '/react-ts-redux-placeholder/users/:userId/album/:albumId/:photoId', element: <Photo/>},
    {path: '/react-ts-redux-placeholder/posts', element: <Posts/>},
    {path: '/react-ts-redux-placeholder/posts/:id', element: <Post/>},
    {path: '/react-ts-redux-placeholder/posts/not_found_post', element: <NotFoundPost/>},
    {path: '/react-ts-redux-placeholder/users/not_found_user', element: <NotFoundUser/>},
    {path: '*', element: <NotFoundPage/>}

]