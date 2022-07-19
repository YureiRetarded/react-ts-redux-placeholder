import React, {FC} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import PhotoList from "../components/PhotoList";

const Photos: FC = () => {
    window.scrollTo(0, 0)
    const {clearAlbum, clearAllPhotos, clearPhoto} = useActions()
    clearAlbum()
    clearAllPhotos()
    clearPhoto()
    const navigate = useNavigate();
    const {userId, albumId} = useParams();

    return (
        <div>
            <Container className='p-0 pt-3 pb-3'>
                <Button onClick={() => navigate('/users/' + userId)} className='w-100'>Back</Button>
            </Container>
            <PhotoList albumId={parseInt(albumId || '1')} userId={parseInt(userId || '1')}/>
        </div>
    );
};

export default Photos;