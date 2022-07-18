import React, {FC} from 'react';
import PostsList from "../../components/PostsList";
import {useActions} from "../../hooks/useActions";


const Posts: FC = () => {
    const {clearAllPosts} = useActions()
    clearAllPosts()
    return (
        <div>
            <PostsList/>
        </div>
    );
};

export default Posts;