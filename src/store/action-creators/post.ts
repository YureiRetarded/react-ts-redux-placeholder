import {Dispatch} from "redux";
import {PostAction, PostActionTypes} from "../../types/post";
import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
            }
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, payload: 'Ошибка при получение пользователей!'})
        }
    }
}
export const fetchPost = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
                dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: [response.data]})
            }
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, payload: 'Ошибка при получение пользователей!'})
        }
    }
}
export function setPostPage(page: number): PostAction {
    return {type: PostActionTypes.SET_POST_PAGE, payload: page}
}