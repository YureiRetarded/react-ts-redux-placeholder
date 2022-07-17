export interface IUserWindow {
    type: string
}

export interface UserWindowState {
    window: string
}

export enum UserWindowActionTypes {
    SET_WINDOW = 'SET_WINDOW',
    SET_DEFAULT = 'SET_DEFAULT'
}

interface SetWindowAction {
    type: UserWindowActionTypes.SET_WINDOW
    payload: string
}

interface SetDefaultAction {
    type: UserWindowActionTypes.SET_DEFAULT
    payload: string
}

export type UserWindowAction = SetWindowAction | SetDefaultAction

