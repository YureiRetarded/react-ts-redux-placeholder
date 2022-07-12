import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import {Button, Stack} from "react-bootstrap";

const PostsList: FC = () => {
    const {posts, loading, error,totalCount,totalPage,page,limit} = useTypedSelector(state => state.post)
    const {fetchPosts,setPostPage}=useActions()
    console.log(totalCount)
    console.log(totalPage)
    console.log(page)
    useEffect(()=>{
        fetchPosts(limit,page)

    },[page])
    const test=()=>{
        if(page!=totalPage){
            setPostPage(page+1)
        }
    }
    return (
        <Stack gap={5} >
            <button onClick={test}>+</button>
            {posts.map(post=>
                <PostItem key={post.id} post={post} />
            )}
        </Stack>
    );
};

export default PostsList;