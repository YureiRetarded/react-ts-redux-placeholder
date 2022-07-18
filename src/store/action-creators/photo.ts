import {Dispatch} from "redux";
import {PhotoAction, PhotoActionTypes, PhotosActionTypes} from "../../types/photo";
import axios from "axios";

export const fetchPhoto = (userId:number,albumId:number,photoId:number) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionTypes.FETCH_PHOTO})
            {
                const responseAlbum = await axios.get('https://jsonplaceholder.typicode.com/albums', {
                    params: {
                        userId: userId,
                        id:albumId
                    }
                })
                const responsePhoto = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                    params: {
                        albumId: albumId,
                        id:photoId
                    }
                })

                if(responseAlbum.data.length===0||responsePhoto.data.length===0){
                    if(responseAlbum.data.length===0){
                        dispatch({type: PhotoActionTypes.FETCH_PHOTO_ERROR, payload: '405'})
                    }
                    if(responsePhoto.data.length===0){
                        dispatch({type: PhotoActionTypes.FETCH_PHOTO_ERROR, payload: '404'})
                    }
                    throw false
                }

                //const response = await axios.get('https://jsonplaceholder.typicode.com/photos/' + photoId)




                dispatch({type: PhotoActionTypes.FETCH_PHOTO_SUCCESS, payload: responsePhoto})
            }
        } catch (e) {
            dispatch({type: PhotoActionTypes.FETCH_PHOTO_ERROR, payload: '404'})
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