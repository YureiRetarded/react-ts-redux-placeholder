import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, Container} from "react-bootstrap";

const Photo: FC = () => {
    const navigate = useNavigate();
    const {userId, albumId} = useParams()
    const {photo, loading, error} = useTypedSelector(state => state.photo)
    const {fetchPhoto} = useActions()
    const {photoId} = useParams()
    useEffect(() => {
        fetchPhoto(parseInt(photoId || '1'))
    }, [])
    return (
        <Container className='p-0 pt-3'>
            <Button onClick={() => navigate('/users/' + userId + '/album/' + albumId)}
                    className='w-100 mb-3'>Back</Button>
            <Card>
                <Card.Img variant="top" src={photo.url} alt="Card image"/>
                <Card.Title>
                    {photo?.title}
                </Card.Title>
            </Card>
        </Container>
    );
};

export default Photo;