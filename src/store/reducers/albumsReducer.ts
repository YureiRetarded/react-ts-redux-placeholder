import {AlbumsAction, AlbumsActionTypes, AlbumsState} from "../../types/album";


const initialState: AlbumsState = {
    albums: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    totalCount: 0,
    totalPage: 1
}

export const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
    switch (action.type) {
        case AlbumsActionTypes.FETCH_ALBUMS:
            return {...state, loading: true}
        case AlbumsActionTypes.FETCH_ALBUMS_SUCCESS:
            return {...state, loading: false, albums: [...state.albums, ...action.payload.data]}
        case AlbumsActionTypes.FETCH_ALBUMS_ERROR:
            return {...state, loading: false, error: action.payload}
        case AlbumsActionTypes.SET_ALBUM_PAGE:
            return {...state, page: action.payload}
        case AlbumsActionTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case AlbumsActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case AlbumsActionTypes.CLEAR_ALBUMS:
            return {...state, albums: [], page: 1, totalPage: 1, totalCount: 0}
        default:
            return state
    }
}