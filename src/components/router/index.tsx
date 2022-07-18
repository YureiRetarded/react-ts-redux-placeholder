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
import NotFoundAlbum from "../../pages/NotFoundAlbum";


export const publicRoutes = [
    {path: '/', element: <Home/>},
    {path: '/users', element: <Users/>},
    {path: '/users/:id', element: <User/>},
    {path: '/users/:userId/album/:albumId', element: <Photos/>},
    {path: '/users/:userId/album/:albumId/:photoId', element: <Photo/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <Post/>},
    {path: '/posts/not_found_post', element: <NotFoundPost/>},
    {path: '/users/not_found_user', element: <NotFoundUser/>},
    {path: '/album/not_found_album', element: <NotFoundAlbum/>},
    {path: '*', element: <NotFoundPage/>}

]