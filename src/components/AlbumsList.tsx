import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import cl from "./styles/PostList.module.scss";
import {Accordion, Spinner, Stack} from "react-bootstrap";
import AlbumItem from "./AlbumItem";

interface UserPostsProps {
    userId: number
}
const AlbumsList:FC<UserPostsProps> = ({userId}) => {
    const {albums, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.albums)
    const {fetchAlbumsByUser, setAlbumsPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchAlbumsByUser(limit, page, userId)
    }, [page])
    // useEffect(() => {
    //     if (loading) return
    //     if (observer.current) observer.current?.disconnect()
    //     let callback = function (entries: any, observer: any) {
    //         if (entries[0].isIntersecting && page < totalPage) {
    //             setAlbumsPage(page + 1)
    //         }
    //     };
    //     observer.current = new IntersectionObserver(callback);
    //     observer.current?.observe(targetRef.current as Element)
    //
    // }, [loading])
    return (
        // <Stack gap={3} className='col-md-12 mx-auto'>
        //     {albums.map(album =>
        //         <AlbumItem key={album.id} album={album}/>
        //     )}
        //
        //     {!loading || page == totalPage ? <div className={cl.observer} ref={targetRef}/> :
        //         <div className={cl.FooterPostsCircle}><Spinner animation='border'/></div>
        //     }
        //     {totalPage == page ? <div className={cl.FooterPosts}>Albums ended</div> : null}
        // </Stack>
        <Accordion defaultActiveKey="0">
            {albums.map(album =>
                    <AlbumItem key={album.id} album={album}/>
                     )}
        </Accordion>
    );
};

export default AlbumsList;