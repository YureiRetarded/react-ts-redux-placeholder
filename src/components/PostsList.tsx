import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import {Stack} from "react-bootstrap";


const PostsList: FC = () => {
    const {posts, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.post)
    const {fetchPosts, setPostPage} = useActions()
    const observer=useRef<IntersectionObserver>();
    const targetRef=useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    useEffect(() => {
        let callback = function(entries:any, observer:any) {
            if(entries[0].isIntersecting){

                console.log('Текущяя страница '+page)
                console.log('Ожидаемая страница '+(page+1))
                console.log('Всего страниц '+totalPage)
                setPostPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current?.observe(targetRef.current as Element)
    }, [loading])

    const test = () => {
        if (page != totalPage) {
            setPostPage(page + 1)
        }
        console.log('Текущяя страница '+page)
        console.log('Ожидаемая страница '+(page+1))
        console.log('Всего страниц '+totalPage)
    }
    return (
        <Stack gap={5}>
            <button onClick={test}>+</button>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
            <div ref={targetRef} style={{height:25, backgroundColor:"black"}}/>
        </Stack>
    );
};

export default PostsList;