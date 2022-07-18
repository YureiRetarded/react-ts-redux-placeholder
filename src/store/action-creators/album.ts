import {Dispatch} from "redux";
import {AlbumAction, AlbumActionTypes} from "../../types/album";
import axios from "axios";

export const fetchAlbum = (id: number,) => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            dispatch({type: AlbumActionTypes.FETCH_ALBUM})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/albums/' + id)
                dispatch({type: AlbumActionTypes.FETCH_ALBUM_SUCCESS, payload: response})
            }
        } catch (e) {
            dispatch({type: AlbumActionTypes.FETCH_ALBUM_ERROR, payload: 'Ошибка при получение поста'})
        }
    }
}


export function clearAlbum(): AlbumAction {
    return {
        type: AlbumActionTypes.CLEAR_ALBUM, payload: {
            userId: 0,
            id: 0,
            title: ''
        }
    }
}