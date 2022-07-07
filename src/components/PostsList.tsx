import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PostItem from "./PostItem";
import {Stack} from "react-bootstrap";

const PostsList: FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.post)
    const {fetchPosts}=useActions()
    useEffect(()=>{
        fetchPosts()
    },[])
    return (
        <Stack gap={5} >
            {posts.map(post=>
                <PostItem key={post.id} post={post} />
            )}
        </Stack>
    );
};

export default PostsList;