import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postReducer} from "./postReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    users: userReducer,
    post:postReducer,
})
export type RootState = ReturnType<typeof rootReducer>