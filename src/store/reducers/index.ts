import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postsReducer} from "./postsReducer";
import {postReducer} from "./postReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
    post:postReducer
})
export type RootState = ReturnType<typeof rootReducer>