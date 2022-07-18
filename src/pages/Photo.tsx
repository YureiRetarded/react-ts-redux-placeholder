import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, Container} from "react-bootstrap";

const Photo: FC = () => {
    const navigate = useNavigate();
    const {photo, loading, error} = useTypedSelector(state => state.photo)
    const {fetchPhoto} = useActions()
    const {userId,albumId,photoId} = useParams()
    useEffect(() => {
        fetchPhoto(parseInt(userId || '0'),parseInt(albumId || '0'),parseInt(photoId || '0'))
    }, [])
    if(error==='405'){
        navigate('/users/'+userId)
    }
    if(error==='404'){
        navigate('/users/'+userId+'/album/'+albumId)
    }
    return (
        <Container className='p-0 pt-3'>
            <Button onClick={() => navigate('/users/' + userId + '/album/' + albumId)}
                    className='w-100 mb-3'>Back</Button>
            <Card>
                <Card.Img variant="top" src={photo?.url} alt="Card image"/>
                <Card.Body>
                    <Card.Title>
                        {photo?.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Photo;