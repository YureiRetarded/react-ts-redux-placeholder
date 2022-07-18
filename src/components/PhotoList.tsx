import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Container, Row, Spinner, Stack} from "react-bootstrap";
import AlbumItem from "./AlbumItem";
import cl from "./styles/PostList.module.scss";
import PhotoItem from "./PhotoItem";
interface PhotoListProps {
    albumId: number
    userId:  number
}
const PhotoList:FC<PhotoListProps> = ({albumId,userId}) => {
    //console.log(userId)
    const {photos, loading, error, totalCount, totalPage, page, limit}=useTypedSelector(state => state.photos)
    const {fetchPhotosByAlbum, setPhotosPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchPhotosByAlbum(limit, page, albumId)
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

    return (
        <Container className='p-0' >
            <Row gap={3} className='row-cols-1 gy-3'>
                {photos.map(photo =>
                    <PhotoItem key={photo.id} photo={photo} userId={userId}/>
                )}
                {!loading || page == totalPage ? <div className={cl.observer} ref={targetRef}/> :
                    <div className={cl.FooterPostsCircle}><Spinner animation='border'/></div>
                }
                {totalPage == page ? <div className={cl.FooterPosts}>Albums ended</div> : null}

            </Row>
        </Container>

    );
};

export default PhotoList;