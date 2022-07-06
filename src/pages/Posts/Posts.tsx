import React, {FC} from 'react';
import PostsList from "../../components/PostsList";
import cl from './Posts.module.scss'

const Posts:FC = () => {
    return (
        <div className={cl.PostPage}>
            <PostsList/>
        </div>
    );
};

export default Posts;