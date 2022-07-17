import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postsReducer} from "./postsReducer";
import {postReducer} from "./postReducer";
import {commentsReducer} from "./commentsReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    posts: postsReducer,
    post:postReducer,
    comments:commentsReducer
})
export type RootState = ReturnType<typeof rootReducer>