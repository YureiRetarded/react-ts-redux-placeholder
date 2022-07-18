import React, {FC, useEffect, useRef, useState} from 'react';
import {IAlbum} from "../types/album";
import {IUser} from "../types/user";
import {useNavigate} from "react-router-dom";
import {Card, Accordion, Spinner} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PhotoItem from "./PhotoItem";
import cl from "./styles/PostItem.module.scss";

interface AlbumItemProps {
    album: IAlbum
}

const AlbumItem: FC<AlbumItemProps> = (album) => {

    const navigate = useNavigate()
    return (
        <Card>
            <Card.Body>
                <Card.Title className={cl.card_btn}
                            onClick={() => navigate('/users/' + album.album.userId + '/album/' + album.album.id)}>
                    {album.album.title}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default AlbumItem;