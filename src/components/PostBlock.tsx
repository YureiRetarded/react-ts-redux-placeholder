import {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {fetchPosts} from "../store/action-creators/posts";


const PostBlock:FC=()=>{
    const{post,loading,error}=useTypedSelector(state=> state.post)
    const{fetchPost}=useActions()
    useEffect(()=> {
        fetchPost(1)
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