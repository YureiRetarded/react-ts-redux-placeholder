import {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

interface PostBlockProps{
    id:number
}

const PostBlock:FC<PostBlockProps>=({id})=>{
    const{post,loading,error}=useTypedSelector(state=> state.post)
    const{fetchPost}=useActions()
    useEffect(()=> {
        fetchPost(id)
    },[])
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