import {PostAction, PostActionTypes, PostState} from "../../types/post";

const initialState: PostState = {
    post: {
        id: 0,
        userId: 0,
        title: '',
        body: '',
    },
    error: null,
    loading: false,
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POST:
            return {...state, loading: true}
        case PostActionTypes.FETCH_POST_SUCCESS:
            return {...state, loading: false, post: action.payload.data}
        case PostActionTypes.FETCH_POST_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostActionTypes.CLEAR_POST:
            return {...state, post: initialState.post,error:null}
        default:
            return state
    }
}