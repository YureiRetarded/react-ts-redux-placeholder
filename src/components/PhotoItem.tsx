import React, {FC} from 'react';
import {IPhoto} from "../types/photo";
import {Card, Col} from "react-bootstrap";
import cl from "./styles/PostItem.module.scss";
import {useNavigate, useParams} from "react-router-dom";

interface PhotoItemProps {
    photo: IPhoto,
    userId: number
}

const PhotoItem: FC<PhotoItemProps> = ({photo,userId}) => {
    const navigate = useNavigate()
    return (
        <Col
            bg='white'
            text={"dark"}
            style={{maxWidth: 200}}
            className={cl.card_btn}
            onClick={() => navigate('/users/' + userId + '/album/' + photo.albumId + '/' + photo.id)}
        >
            <Card>
                <Card.Img variant="top" src={photo.thumbnailUrl} alt="Card image"/>
                <Card.Body>
                    <Card.Title>{photo.title.slice(0, 20)}...</Card.Title>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default PhotoItem;