import React, {FC} from 'react';
import {IAlbum} from "../types/album";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
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
                            onClick={() => navigate('/react-ts-redux-placeholder/users/' + album.album.userId + '/album/' + album.album.id)}>
                    {album.album.title}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default AlbumItem;