import React, {FC, useState} from 'react';

import {IAlbum} from "../types/album";
import {IUser} from "../types/user";
import {useNavigate} from "react-router-dom";
import {Card,Accordion} from "react-bootstrap";
interface AlbumItemProps {
    album: IAlbum
}

const AlbumItem:FC<AlbumItemProps> = (album) => {

    const [user, setUser] = useState<IUser>()
    const navigate = useNavigate()

    return (
        <Accordion.Item eventKey={album.album?.id.toString()}>
            <Accordion.Header>{album.album?.title}</Accordion.Header>
            <Accordion.Body>

            </Accordion.Body>
        </Accordion.Item>
    );
};

export default AlbumItem;