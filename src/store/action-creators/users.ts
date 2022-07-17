import {Dispatch} from "redux";
import {UsersAction, UsersActionTypes} from "../../types/user";
import axios from "axios";
import {getPageCount} from "../../utils/pages";

export const fetchUsers = (limit: number, page: number) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                    params: {
                        _limit: limit,
                        _page: page
                    }
                })
                dispatch({type: UsersActionTypes.SET_TOTAL_COUNT, payload: response.headers['x-total-count']})
                dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response})
                dispatch({
                    type: UsersActionTypes.SET_TOTAL_PAGE,
                    payload: getPageCount(parseInt(response.headers['x-total-count']), limit)
                })
            }
        } catch (e) {
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при получение пользователей!'})
        }
    }
}


export function clearAllUsers(): UsersAction {
    return {type: UsersActionTypes.CLEAR_USERS, payload: []}
}

export function setUserPage(page: number): UsersAction {
    return {type: UsersActionTypes.SET_USER_PAGE, payload: page}
}
