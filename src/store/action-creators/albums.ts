import {Dispatch} from "redux";
import {AlbumsAction, AlbumsActionTypes} from "../../types/album";
import axios from "axios";
import {getPageCount} from "../../utils/pages";

export const fetchAlbumsByUser = (limit: number, page: number, userId: number) => {
    return async (dispatch: Dispatch<AlbumsAction>) => {
        try {
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
                    params: {
                        userId: userId,
                        _limit: limit,
                        _page: page
                    }
                })
                dispatch({type: AlbumsActionTypes.SET_TOTAL_COUNT, payload: response.headers['x-total-count']})
                dispatch({type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS, payload: response})
                dispatch({
                    type: AlbumsActionTypes.SET_TOTAL_PAGE,
                    payload: getPageCount(parseInt(response.headers['x-total-count']), limit)
                })
            }
        } catch (e) {
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS_ERROR, payload: 'Ошибка при получение постов!'})
        }
    }
}

export function clearAllAlbums(): AlbumsAction {
    return {type: AlbumsActionTypes.CLEAR_ALBUMS, payload: []}
}

export function setPostPage(page: number): AlbumsAction {
    return {type: AlbumsActionTypes.SET_ALBUM_PAGE, payload: page}
}
