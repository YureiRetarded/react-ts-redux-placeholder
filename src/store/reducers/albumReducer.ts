import {AlbumAction, AlbumActionTypes, AlbumState} from "../../types/album";

const initialState: AlbumState = {
    album: {
        userId: 0,
        id: 0,
        title: ''
    },
    error: null,
    loading: false,
}

export const albumReducer = (state = initialState, action: AlbumAction): AlbumState => {
    switch (action.type) {
        case AlbumActionTypes.FETCH_ALBUM:
            return {...state, loading: true}
        case AlbumActionTypes.FETCH_ALBUM_SUCCESS:
            return {...state, loading: false, album: action.payload.data}
        case AlbumActionTypes.FETCH_ALBUM_ERROR:
            return {...state, loading: false, error: action.payload}
        case AlbumActionTypes.CLEAR_ALBUM:
            return {...state, album: initialState.album}
        default:
            return state
    }
}