import {Dispatch} from "redux";
import {CommentsAction, CommentsActionTypes} from '../../types/comment'
import axios from "axios";
import {getPageCount} from "../../utils/pages";

export const fetchComments = (PostId: number, limit: number, page: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                    params: {
                        postId: PostId,
                        _limit: limit,
                        _page: page
                    }
                })
                dispatch({type: CommentsActionTypes.SET_TOTAL_COUNT, payload: response.headers['x-total-count']})
                dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response})
                dispatch({
                    type: CommentsActionTypes.SET_TOTAL_PAGE,
                    payload: getPageCount(parseInt(response.headers['x-total-count']), limit)
                })
            }
        } catch (e) {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: 'Ошибка при получение пользователей!'})
        }
    }
}


export function clearAllComments(): CommentsAction {
    return {type: CommentsActionTypes.CLEAR_COMMENTS, payload: []}
}

export function setCommentPage(page: number): CommentsAction {
    return {type: CommentsActionTypes.SET_COMMENT_PAGE, payload: page}
}
