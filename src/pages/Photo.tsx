import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useParams} from "react-router-dom";
import {Card, Container} from "react-bootstrap";

const Photo: FC = () => {
    const {photo,loading,error}=useTypedSelector(state => state.photo)
    const {fetchPhoto}=useActions()
    const {photoId}=useParams()
    useEffect(()=>{
        fetchPhoto(parseInt(photoId||'1'))
    },[])
    return (
        <Container className='p-0 pt-3'>
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