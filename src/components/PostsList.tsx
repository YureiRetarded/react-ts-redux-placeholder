import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import {Stack} from "react-bootstrap";






const PostsList: FC = () => {
    console.log('---------------------START------------------------------')
    const {posts, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.post)
    console.log(posts)
    const {fetchPosts, setPostPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        console.log('Произошло изменение страницы')
        console.log('Получение постов')
        fetchPosts(limit, page)
    }, [page])

    useEffect(() => {
        console.log('Произошло изменение состояние загрузки')
        console.log('Loading: '+loading)
        if (loading) return
        if (observer.current) observer.current?.disconnect()
        let callback = function (entries: any, observer: any) {
            if (entries[0].isIntersecting && page < totalPage) {

                // console.log('Текущяя страница ' + page)
                // console.log('Ожидаемая страница ' + (page + 1))
                // console.log('Всего страниц ' + totalPage)
                setPostPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current?.observe(targetRef.current as Element)
        console.log('Конец изменение состояние загрузки')
    }, [loading])
    console.log('----------------------END-----------------------------')
    return (
        <Stack gap={5}>

            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
            {!loading?<div ref={targetRef}/>:<div></div>}
        </Stack>
    );
};

export default PostsList;