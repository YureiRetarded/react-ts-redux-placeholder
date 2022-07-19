import {Dispatch} from "redux";
import {PostAction, PostActionTypes} from "../../types/post";
import axios from "axios";

export const fetchPost = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POST})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
                dispatch({type: PostActionTypes.FETCH_POST_SUCCESS, payload: response})
            }
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: '404'})
        }
    }
}


export function clearPost(): PostAction {
    return {
        type: PostActionTypes.CLEAR_POST, payload: {
            id: 0,
            userId: 0,
            title: '',
            body: '',
        }
    }
}

