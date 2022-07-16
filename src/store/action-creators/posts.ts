import {Dispatch} from "redux";
import {PostsAction, PostsActionTypes} from "../../types/post";
import axios from "axios";
import {getPageCount} from "../../utils/pages";

export const fetchPosts = (limit: number, page: number) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: limit,
                        _page: page
                    }
                })
                dispatch({type: PostsActionTypes.SET_TOTAL_COUNT, payload: response.headers['x-total-count']})
                dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response})
                dispatch({
                    type: PostsActionTypes.SET_TOTAL_PAGE,
                    payload: getPageCount(parseInt(response.headers['x-total-count']), limit)
                })
            }
        } catch (e) {
            dispatch({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: 'Ошибка при получение пользователей!'})
        }
    }
}


export function clearAllPosts():PostsAction{
    return {type: PostsActionTypes.CLEAR_POSTS, payload: []}
}

export function setPostPage(page: number): PostsAction {
    return {type: PostsActionTypes.SET_POST_PAGE, payload: page}
}
