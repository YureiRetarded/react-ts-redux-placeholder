import {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {fetchPosts} from "../store/action-creators/posts";

interface PostBlockProps{
    id:number
}

const PostBlock:FC<PostBlockProps>=({id})=>{
    const{post,loading,error}=useTypedSelector(state=> state.post)
    const{fetchPost}=useActions()
    useEffect(()=> {
        fetchPost(id)
    },[])
   // console.log(post)
    useEffect(()=>{
    },[loading])
    return(
        <div>
            <h2>
                {post.title}
            </h2>
            <p>
                {post.body}
            </p>
        </div>
    )
}
export default PostBlock;