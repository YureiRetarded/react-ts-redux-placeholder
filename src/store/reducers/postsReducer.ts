import {PostsAction, PostsActionTypes, PostsState} from "../../types/post";


const initialState: PostsState = {
    posts: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    totalCount: 0,
    totalPage: 1
}

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: [...state.posts, ...action.payload.data]}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.SET_POST_PAGE:
            return {...state, page: action.payload}
        case PostsActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case PostsActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case PostsActionTypes.CLEAR_POSTS:
            return {...state, posts: [], page: 1, totalPage: 1, totalCount: 0}
        default:
            return state
    }
}