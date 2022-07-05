import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const PostsList: FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.post)
    const {fetchPosts}=useActions()
    useEffect(()=>{
        fetchPosts()
    },[])
    return (
        <div>
            {posts.map(post=>
                <div>{post.title}</div>
            )}
        </div>
    );
};

export default PostsList;