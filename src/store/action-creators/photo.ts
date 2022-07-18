import {Dispatch} from "redux";
import {PhotoAction, PhotoActionTypes} from "../../types/photo";
import axios from "axios";

export const fetchPhoto = (id: number,) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionTypes.FETCH_PHOTO})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
                dispatch({type: PhotoActionTypes.FETCH_PHOTO_SUCCESS, payload: response})
            }
        } catch (e) {
            dispatch({type: PhotoActionTypes.FETCH_PHOTO_ERROR, payload: 'Ошибка при получение поста'})
        }
    }
}


export function clearPhoto(): PhotoAction {
    return {
        type: PhotoActionTypes.CLEAR_PHOTO, payload: {
            albumId: 0,
            id: 0,
            title: '',
            url: '',
            thumbnailUrl: ''
        }
    }
}