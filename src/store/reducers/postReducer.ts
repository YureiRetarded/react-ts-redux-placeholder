import {PostAction, PostActionTypes, PostState} from "../../types/post";

const initialState: PostState = {
    posts: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {...state, loading: true}
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: action.payload}
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostActionTypes.SET_POST_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}