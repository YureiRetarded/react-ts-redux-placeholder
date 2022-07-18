import {AxiosResponse} from "axios";

export interface IAlbum {
    id: number;
    userId: number;
    title: string;
}

export interface AlbumsState {
    albums: IAlbum[]
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    totalCount: number | string;
    totalPage: number | string;
}

export enum AlbumsActionTypes {
    FETCH_ALBUMS = 'FETCH_ALBUMS',
    FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
    FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',
    SET_ALBUM_PAGE = 'SET_ALBUM_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    CLEAR_ALBUMS = 'CLEAR_ALBUMS',
}

interface FetchAlbumsAction {
    type: AlbumsActionTypes.FETCH_ALBUMS
}

interface FetchAlbumsSuccessAction {
    type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS
    payload: AxiosResponse;
}

interface FetchAlbumsErrorAction {
    type: AlbumsActionTypes.FETCH_ALBUMS_ERROR
    payload: string
}

interface SetAlbumsPage {
    type: AlbumsActionTypes.SET_ALBUM_PAGE
    payload: number
}

interface SetTotalPage {
    type: AlbumsActionTypes.SET_TOTAL_PAGE
    payload: number | string
}

interface SetTotalCount {
    type: AlbumsActionTypes.SET_TOTAL_COUNT
    payload: number | string
}

interface ClearAlbums {
    type: AlbumsActionTypes.CLEAR_ALBUMS
    payload: IAlbum[]
}

export type AlbumsAction =
    FetchAlbumsAction
    | FetchAlbumsErrorAction
    | FetchAlbumsSuccessAction
    | SetAlbumsPage
    | SetTotalPage
    | SetTotalCount
    | ClearAlbums


export interface AlbumState {
    album: IAlbum;
    loading: boolean;
    error: null | string;
}

export enum AlbumActionTypes {
    FETCH_ALBUM = 'FETCH_ALBUM',
    FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS',
    FETCH_ALBUM_ERROR = 'FETCH_ALBUM_ERROR',
    CLEAR_ALBUM = 'CLEAR_ALBUM',
}

interface FetchAlbumAction {
    type: AlbumActionTypes.FETCH_ALBUM
}

interface FetchAlbumSuccessAction {
    type: AlbumActionTypes.FETCH_ALBUM_SUCCESS
    payload: AxiosResponse;
}

interface FetchAlbumErrorAction {
    type: AlbumActionTypes.FETCH_ALBUM_ERROR
    payload: string
}

interface ClearAlbum {
    type: AlbumActionTypes.CLEAR_ALBUM
    payload: IAlbum
}

export type AlbumAction =
    FetchAlbumAction
    | FetchAlbumErrorAction
    | FetchAlbumSuccessAction
    | ClearAlbum
