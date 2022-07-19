import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
    user: {
        id: 0,
        name: '',
        username: ''
    },
    loading: false,
    error: null
}
export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {...state, loading: true}
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload.data}
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, loading: false, error: action.payload}
        case UserActionTypes.CLEAR_USER:
            return {...state, user: initialState.user, error: null}
        default:
            return state
    }
}