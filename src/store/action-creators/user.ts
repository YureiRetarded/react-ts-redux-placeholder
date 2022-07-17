import {Dispatch} from "redux";
import {UserAction, UserActionTypes} from "../../types/user";
import axios from "axios";

export const fetchUser = (id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
                dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response})
            }
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'Ошибка при получение пользователя'})
        }
    }
}


export function clearUser(): UserAction {
    return {
        type: UserActionTypes.CLEAR_USER, payload: {
            id: 0,
            name: '',
            username: ''
        }
    }
}

