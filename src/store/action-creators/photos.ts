import {Dispatch} from "redux";
import {PhotosAction, PhotosActionTypes} from "../../types/photo";
import axios from "axios";
import {getPageCount} from "../../utils/pages";

export const fetchPhotosByAlbum = (limit: number, page: number, albumId: number,userId:number) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS})
            {
                const responseAlbum = await axios.get('https://jsonplaceholder.typicode.com/albums', {
                    params: {
                        userId: userId,
                        id:albumId
                    }
                })
                if(responseAlbum.data.length===0){
                    dispatch({type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: '404'})
                    throw false
                }

                const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
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
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: '404'})
        }
    }
}

export function clearAllPhotos(): PhotosAction {
    return {type: PhotosActionTypes.CLEAR_PHOTOS, payload: []}
}

export function setPhotosPage(page: number): PhotosAction {
    return {type: PhotosActionTypes.SET_PHOTO_PAGE, payload: page}
}
