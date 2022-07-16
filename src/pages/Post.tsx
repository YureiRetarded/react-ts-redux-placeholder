import React, {FC, useEffect} from 'react';
import PostBlock from "../components/PostBlock";
import {useNavigate, useParams} from "react-router-dom";
import {checkPostId} from "../utils/checkPost";

const Post: FC = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        if(checkPostId(id)=='incorrect')
            navigate('/posts/not_found_post')
    },[])
     if(checkPostId(id)!='incorrect'){
         return (
         <div>
             <PostBlock id={1}/>
         </div>
     )}
    return(
        <div>Ошибка при отображение поста</div>
    )
};

export default Post;