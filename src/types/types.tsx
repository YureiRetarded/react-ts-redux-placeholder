export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

export interface IGeo {
    lat: string;
    lng: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ITodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export interface IPhotos {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IAlbum {
    id: number;
    userId: number;
    title: string;
}

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}
