import React, {FC, useEffect} from 'react';
import PostsList from "../../components/PostsList";
import cl from './Posts.module.scss'
import {useActions} from "../../hooks/useActions";


const Posts: FC = () => {
    const {clearAllPosts} = useActions()
    clearAllPosts()
    return (
        <div className={cl.PostPage}>
            <PostsList/>
        </div>
    );
};

export default Posts;