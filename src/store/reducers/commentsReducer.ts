import {CommentsAction, CommentsActionTypes, CommentsState} from "../../types/comment";
import {Axios} from "axios";

const initialState: CommentsState = {
    comments: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    totalCount: 0,
    totalPage: 1
}

export const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS:
            return {...state, loading: true}
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {...state, loading: false, comments: [...state.comments, ...action.payload.data]}
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case CommentsActionTypes.SET_COMMENT_PAGE:
            return {...state, page: action.payload}
        case CommentsActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case CommentsActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case CommentsActionTypes.CLEAR_COMMENTS:
            return {...state, comments: [], page: 0, totalPage: 0, totalCount: 0}
        default:
            return state
    }
}