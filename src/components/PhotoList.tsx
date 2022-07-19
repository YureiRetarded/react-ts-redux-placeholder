import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Container, Row, Spinner} from "react-bootstrap";
import cl from "./styles/PostList.module.scss";
import PhotoItem from "./PhotoItem";
import {useNavigate} from "react-router-dom";

interface PhotoListProps {
    albumId: number
    userId: number
}

const PhotoList: FC<PhotoListProps> = ({albumId, userId}) => {
    const navigate = useNavigate()
    const {photos, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.photos)
    const {fetchPhotosByAlbum, setPhotosPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchPhotosByAlbum(limit, page, albumId, userId)
    }, [page])
    useEffect(() => {
        if (loading) return
        if (observer.current) observer.current?.disconnect()
        let callback = function (entries: any, observer: any) {
            if (entries[0].isIntersecting && page < totalPage) {
                setPhotosPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current?.observe(targetRef.current as Element)

    }, [loading])
    if (error === '404') {
        navigate('/users/' + userId)
    }
    return (
        <Container className='p-0'>
            <Row gap={3} className='row-cols-1 gy-3 justify-content-around'>
                {photos.map(photo =>
                    <PhotoItem key={photo.id} photo={photo} userId={userId}/>
                )}
                {!loading || page == totalPage ? <div className={cl.observer} ref={targetRef}/> :
                    <div className={cl.FooterPostsCircle}><Spinner animation='border'/></div>
                }
            </Row>
        </Container>

    );
};

export default PhotoList;