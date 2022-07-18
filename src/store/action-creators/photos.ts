import {Dispatch} from "redux";
import {PhotosAction, PhotosActionTypes} from "../../types/photo";
import axios from "axios";
import {getPageCount} from "../../utils/pages";

export const fetchPhotosByAlbum = (limit: number, page: number, albumId: number) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS})
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
                    params: {
                        albumId: albumId,
                        _limit: limit,
                        _page: page
                    }
                })
                dispatch({type: PhotosActionTypes.SET_TOTAL_COUNT, payload: response.headers['x-total-count']})
                dispatch({type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: response})
                dispatch({
                    type: PhotosActionTypes.SET_TOTAL_PAGE,
                    payload: getPageCount(parseInt(response.headers['x-total-count']), limit)
                })
            }
        } catch (e) {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: 'Ошибка при получение постов!'})
        }
    }
}

export function clearAllPhotos(): PhotosAction {
    return {type: PhotosActionTypes.CLEAR_PHOTOS, payload: []}
}

export function setPostPage(page: number): PhotosAction {
    return {type: PhotosActionTypes.SET_PHOTO_PAGE, payload: page}
}
