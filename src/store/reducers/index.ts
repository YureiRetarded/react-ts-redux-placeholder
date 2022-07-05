import {combineReducers} from "redux";
import {userReducer} from "./userReduser";
import {postReducer} from "./postReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    post:postReducer,
})
export type RootState = ReturnType<typeof rootReducer>