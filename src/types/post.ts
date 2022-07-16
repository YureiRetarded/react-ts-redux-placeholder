import {AxiosResponse} from "axios";


export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

//Posts
export interface PostsState {
    posts: IPost[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    totalCount: number | string;
    totalPage: number | string;
}


export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_POST_PAGE = 'SET_POST_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    CLEAR_POSTS = 'CLEAR_POSTS',
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS
    payload: AxiosResponse;
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR
    payload: string
}

interface SetPostsPage {
    type: PostsActionTypes.SET_POST_PAGE
    payload: number
}

interface SetTotalPage {
    type: PostsActionTypes.SET_TOTAL_PAGE
    payload: number | string
}

interface SetTotalCount {
    type: PostsActionTypes.SET_TOTAL_COUNT
    payload: number | string
}

interface ClearPosts {
    type: PostsActionTypes.CLEAR_POSTS
    payload: IPost[]
}

export type PostsAction =
    FetchPostsAction
    | FetchPostsErrorAction
    | FetchPostsSuccessAction
    | SetPostsPage
    | SetTotalPage
    | SetTotalCount
    | ClearPosts


//Post

export interface PostState {
    post: IPost;
    loading: boolean;
    error: null | string;
}

export enum PostActionTypes {
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_ERROR = 'FETCH_POST_ERROR',
    CLEAR_POST = 'CLEAR_POST',
}

interface FetchPostAction {
    type: PostActionTypes.FETCH_POST
}

interface FetchPostSuccessAction {
    type: PostActionTypes.FETCH_POST_SUCCESS
    payload: AxiosResponse;
}

interface FetchPostErrorAction {
    type: PostActionTypes.FETCH_POST_ERROR
    payload: string
}

interface ClearPost {
    type: PostActionTypes.CLEAR_POST
    payload: IPost
}

export type PostAction =
    FetchPostAction
    | FetchPostErrorAction
    | FetchPostSuccessAction
    | ClearPost

