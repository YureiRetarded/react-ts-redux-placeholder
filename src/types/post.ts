import {AxiosResponse} from "axios";

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostState {
    posts: IPost[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    totalCount: number|string;
    totalPage: number|string;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_POST_PAGE = 'SET_POST_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

}

interface FetchPostAction {
    type: PostActionTypes.FETCH_POSTS
}

interface FetchPostErrorAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS
    payload: AxiosResponse;
}

interface FetchPostSuccessAction {
    type: PostActionTypes.FETCH_POSTS_ERROR
    payload: string
}

interface SetPostPage {
    type: PostActionTypes.SET_POST_PAGE
    payload: number
}

interface SetTotalPage {
    type: PostActionTypes.SET_TOTAL_PAGE
    payload: number|string
}

interface SetTotalCount {
    type: PostActionTypes.SET_TOTAL_COUNT
    payload: number|string
}

export type PostAction =
    FetchPostAction
    | FetchPostErrorAction
    | FetchPostSuccessAction
    | SetPostPage
    | SetTotalPage
    | SetTotalCount