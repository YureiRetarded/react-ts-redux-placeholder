import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postsReducer} from "./postsReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
})
export type RootState = ReturnType<typeof rootReducer>