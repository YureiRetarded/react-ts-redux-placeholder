import {AxiosResponse} from "axios";


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

export interface UsersState {
    users: IUser[],
    loading: boolean,
    error: null | string,
    page: number;
    limit: number;
    totalCount: number | string;
    totalPage: number | string;
}

export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_USER_PAGE = 'SET_USER_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    CLEAR_USERS = 'CLEAR_USERS',
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;

}

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: AxiosResponse;

}


interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR,
    payload: string

}

interface SetUsersPage {
    type: UsersActionTypes.SET_USER_PAGE
    payload: number
}

interface SetTotalPage {
    type: UsersActionTypes.SET_TOTAL_PAGE
    payload: number | string
}

interface SetTotalCount {
    type: UsersActionTypes.SET_TOTAL_COUNT
    payload: number | string
}

interface ClearUsers {
    type: UsersActionTypes.CLEAR_USERS
    payload: IUser[]
}

export type UsersAction =
    FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
    | SetUsersPage
    | SetTotalPage
    | SetTotalCount
    | ClearUsers


export interface UserState {
    user: IUser,
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    CLEAR_USER = 'CLEAR_USER',
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: AxiosResponse;
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string
}

interface ClearUser {
    type: UserActionTypes.CLEAR_USER
    payload: IUser
}

export type UserAction =
    FetchUserAction
    | FetchUserErrorAction
    | FetchUserSuccessAction
    | ClearUser
