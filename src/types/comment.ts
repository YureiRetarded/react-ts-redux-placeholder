import {AxiosResponse} from "axios";

export interface IComment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface CommentsState {
    comments: IComment[],
    loading: boolean,
    error: null | string
    page: number;
    limit: number;
    totalCount: number | string;
    totalPage: number | string;
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    SET_COMMENT_PAGE = 'SET_COMMENT_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    CLEAR_COMMENTS = 'CLEAR_COMMENTS',
}


interface FetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS
}

interface FetchCommentsSuccessAction {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS
    payload: AxiosResponse;
}

interface FetchCommentsErrorAction {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR
    payload: string
}

interface SetCommentPage {
    type: CommentsActionTypes.SET_COMMENT_PAGE
    payload: number
}

interface SetTotalPage {
    type: CommentsActionTypes.SET_TOTAL_PAGE
    payload: number | string
}

interface SetTotalCount {
    type: CommentsActionTypes.SET_TOTAL_COUNT
    payload: number | string
}

interface ClearComments {
    type: CommentsActionTypes.CLEAR_COMMENTS
    payload: IComment[]
}

export type CommentsAction =
    FetchCommentsAction
    | FetchCommentsErrorAction
    | FetchCommentsSuccessAction
    | SetCommentPage
    | SetTotalPage
    | SetTotalCount
    | ClearComments

