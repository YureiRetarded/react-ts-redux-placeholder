import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postsReducer} from "./postsReducer";
import {postReducer} from "./postReducer";
import {commentsReducer} from "./commentsReducer";
import {usersReducer} from "./usersReducer";
import {userWindowReducer} from "./userWindowReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
    userWindow: userWindowReducer
})
export type RootState = ReturnType<typeof rootReducer>