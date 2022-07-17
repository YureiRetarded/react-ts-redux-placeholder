import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import {Spinner, Stack} from "react-bootstrap";
import cl from './styles/PostList.module.scss'


const PostsList: FC = () => {

    const {posts, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.posts)
    const {fetchPosts, setPostPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchPosts(limit, page)

    }, [page])


    useEffect(() => {
        if (loading) return
        if (observer.current) observer.current?.disconnect()
        let callback = function (entries: any, observer: any) {
            if (entries[0].isIntersecting && page < totalPage) {
                setPostPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current?.observe(targetRef.current as Element)

    }, [loading])
    return (
        <Stack gap={3} className='col-md-12 mx-auto pt-3'>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}

            {!loading || page == totalPage ? <div className={cl.observer} ref={targetRef}/> :
                <div className={cl.FooterPostsCircle}><Spinner animation='border'/></div>
            }
            {totalPage == page ? <div className={cl.FooterPosts}>Posts ended</div> : null}
        </Stack>
    );
};

export default PostsList;