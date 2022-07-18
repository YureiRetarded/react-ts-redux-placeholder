import {AxiosResponse} from "axios";

export interface IPhoto {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


export interface PhotosState {
    photos: IPhoto[]
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    totalCount: number | string;
    totalPage: number | string;
}

export enum PhotosActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
    SET_PHOTO_PAGE = 'SET_PHOTO_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    CLEAR_PHOTOS = 'CLEAR_PHOTOS',
}

interface FetchPhotosAction {
    type: PhotosActionTypes.FETCH_PHOTOS
}

interface FetchPhotosSuccessAction {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS
    payload: AxiosResponse;
}

interface FetchPhotosErrorAction {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR
    payload: string
}

interface SetPhotosPage {
    type: PhotosActionTypes.SET_PHOTO_PAGE
    payload: number
}

interface SetTotalPage {
    type: PhotosActionTypes.SET_TOTAL_PAGE
    payload: number | string
}

interface SetTotalCount {
    type: PhotosActionTypes.SET_TOTAL_COUNT
    payload: number | string
}

interface ClearPhotos {
    type: PhotosActionTypes.CLEAR_PHOTOS
    payload: IPhoto[]
}

export type PhotosAction =
    FetchPhotosAction
    | FetchPhotosErrorAction
    | FetchPhotosSuccessAction
    | SetPhotosPage
    | SetTotalPage
    | SetTotalCount
    | ClearPhotos


export interface PhotoState {
    post: IPhoto;
    loading: boolean;
    error: null | string;
}

export enum PhotoActionTypes {
    FETCH_PHOTO = 'FETCH_PHOTO',
    FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS',
    FETCH_PHOTO_ERROR = 'FETCH_PHOTO_ERROR',
    CLEAR_PHOTO = 'CLEAR_PHOTO',
}

interface FetchPhotoAction {
    type: PhotoActionTypes.FETCH_PHOTO
}

interface FetchPhotoSuccessAction {
    type: PhotoActionTypes.FETCH_PHOTO_SUCCESS
    payload: AxiosResponse;
}

interface FetchPhotoErrorAction {
    type: PhotoActionTypes.FETCH_PHOTO_ERROR
    payload: string
}

interface ClearPhoto {
    type: PhotoActionTypes.CLEAR_PHOTO
    payload: IPhoto
}

export type PhotoAction =
    FetchPhotoAction
    | FetchPhotoErrorAction
    | FetchPhotoSuccessAction
    | ClearPhoto
