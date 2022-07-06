export interface IUser {
    id: number;
    name: string;
    username: string;
    email?: string;
    address?: IAddress;
    phone?: string;
    website?: string;
    company?: ICompany;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

export interface IGeo {
    lat: string;
    lng: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserState {
    users: IUser[],
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;

}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: IUser[]

}


interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string

}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
