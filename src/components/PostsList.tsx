import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import {Stack} from "react-bootstrap";


const PostsList: FC = () => {

    const {posts, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.post)
    const {fetchPosts, setPostPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchPosts(limit, page + 1)
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
        <Stack gap={5}>

            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
            {!loading ? <div ref={targetRef}/> : <div></div>}
        </Stack>
    );
};

export default PostsList;