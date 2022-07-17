import {UserWindowAction, UserWindowActionTypes} from "../../types/userWindow";

export const setWindow = (typeWindow: string): UserWindowAction => {
    return {
        type: UserWindowActionTypes.SET_WINDOW, payload: typeWindow
    }
}
export const setDefault = (): UserWindowAction => {
    return {
        type: UserWindowActionTypes.SET_DEFAULT, payload: 'posts'
    }
}