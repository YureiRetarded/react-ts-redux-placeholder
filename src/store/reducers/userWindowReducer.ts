import {IUserWindow, UserWindowAction, UserWindowActionTypes, UserWindowState} from "../../types/userWindow";

const initialState:UserWindowState={
    window:'posts'
}
export const userWindowReducer=(state=initialState,action:UserWindowAction): UserWindowState=> {
    switch (action.type){
        case UserWindowActionTypes.SET_WINDOW:
            return {...state,window:action.payload}
        case UserWindowActionTypes.SET_DEFAULT:
            return {...state,window:action.payload}
        default:
            return state
    }
}