import {PostAction, PostActionTypes, PostState} from "../../types/post";
import {Axios} from "axios";

const initialState: PostState = {
    posts: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    totalCount: 0,
    totalPage: 1
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {...state, loading: true}
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: [...state.posts, ...action.payload.data]}
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostActionTypes.SET_POST_PAGE:
            return {...state, page: action.payload}
        case PostActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case PostActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case PostActionTypes.CLEAR_POSTS:
            return {...state, posts: [], page: 0, totalPage: 0, totalCount: 0}
        default:
            return state
    }
}