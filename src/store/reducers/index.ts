import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postsReducer} from "./postsReducer";
import {postReducer} from "./postReducer";
import {commentsReducer} from "./commentsReducer";
import {usersReducer} from "./usersReducer";
import {userWindowReducer} from "./userWindowReducer";
import {albumReducer} from "./albumReducer";
import {albumsReducer} from "./albumsReducer";
import {photoReducer} from "./photoReducer";
import {photosReducer} from "./photosReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
    userWindow: userWindowReducer,
    album:albumReducer,
    albums:albumsReducer,
    photo:photoReducer,
    photos:photosReducer

})
export type RootState = ReturnType<typeof rootReducer>