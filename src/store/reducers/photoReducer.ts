import {PhotoAction, PhotoActionTypes, PhotoState} from "../../types/photo";

const initialState: PhotoState = {
    photo: {
        albumId:0,
        id: 0,
        title: '',
        url:'',
        thumbnailUrl:''
    },
    error: null,
    loading: false,
}

export const photoReducer = (state = initialState, action: PhotoAction): PhotoState => {
    switch (action.type) {
        case PhotoActionTypes.FETCH_PHOTO:
            return {...state, loading: true}
        case PhotoActionTypes.FETCH_PHOTO_SUCCESS:
            return {...state, loading: false, photo: action.payload.data}
        case PhotoActionTypes.FETCH_PHOTO_ERROR:
            return {...state, loading: false, error: action.payload}
        case PhotoActionTypes.CLEAR_PHOTO:
            return {...state, photo: initialState.photo}
        default:
            return state
    }
}