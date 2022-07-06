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
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_POST_PAGE = 'SET_POST_PAGE'

}

interface FetchPostAction {
    type: PostActionTypes.FETCH_POSTS
}

interface FetchPostErrorAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS
    payload: any[];
}

interface FetchPostSuccessAction {
    type: PostActionTypes.FETCH_POSTS_ERROR
    payload: string
}

interface SetPostPage {
    type: PostActionTypes.SET_POST_PAGE
    payload: number
}

export type PostAction = FetchPostAction | FetchPostErrorAction | FetchPostSuccessAction | SetPostPage