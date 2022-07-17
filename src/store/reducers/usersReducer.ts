import {UsersAction, UsersActionTypes, UsersState, UserState} from "../../types/user";

const initialState: UsersState = {
    users: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    totalCount: 0,
    totalPage: 1
}
export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: [...state.users, ...action.payload.data]}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case UsersActionTypes.SET_USER_PAGE:
            return {...state, page: action.payload}
        case UsersActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case UsersActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case UsersActionTypes.CLEAR_USERS:
            return {...state, users: [], page: 1, totalPage: 1, totalCount: 0}
        default:
            return state
    }
}