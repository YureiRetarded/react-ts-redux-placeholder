import {PhotosAction, PhotosActionTypes, PhotosState} from "../../types/photo";


const initialState: PhotosState = {
    photos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    totalCount: 0,
    totalPage: 1
}

export const photosReducer = (state = initialState, action: PhotosAction): PhotosState => {
    switch (action.type) {
        case PhotosActionTypes.FETCH_PHOTOS:
            return {...state, loading: true}
        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: [...state.photos, ...action.payload.data]}
        case PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PhotosActionTypes.SET_PHOTO_PAGE:
            return {...state, page: action.payload}
        case PhotosActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case PhotosActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case PhotosActionTypes.CLEAR_PHOTOS:
            return {...state, photos: [], page: 1, totalPage: 1, totalCount: 0}
        default:
            return state
    }
}