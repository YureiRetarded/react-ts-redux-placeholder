import React, {FC, useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import CommentItem from "./CommentItem";
import cl from "./styles/PostList.module.scss";
import {Container, Spinner, Stack} from "react-bootstrap";
import {IUser} from "../types/user";


interface PostCommentListProps {
    id: number
}


const PostCommentList: FC<PostCommentListProps> = (post) => {

    const {comments, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.comments)
    const {fetchComments, setCommentPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetchComments(post.id, limit, page)
    }, [page])

    useEffect(() => {
        if (loading) return
        if (observer.current) observer.current?.disconnect()
        let callback = function (entries: any, observer: any) {
            if (entries[0].isIntersecting && page < totalPage) {
                setCommentPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current?.observe(targetRef.current as Element)

    }, [loading])


    return (
        <Container className='p-0'>
            <Stack gap={3} className='mx-auto col-md-12 pt-3'>
                {comments.map(comment =>
                    <CommentItem key={comment.id} comment={comment}/>
                )}

                {!loading || page == totalPage ? <div className={cl.observer} ref={targetRef}/> :
                    <div className={cl.FooterPostsCircle}><Spinner animation='border'/></div>
                }
            </Stack>
        </Container>
    );
};

export default PostCommentList;