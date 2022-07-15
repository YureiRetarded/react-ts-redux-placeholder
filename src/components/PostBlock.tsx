import {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {fetchPosts} from "../store/action-creators/posts";


const PostBlock:FC=()=>{
    const{posts,loading,error}=useTypedSelector(state=> state.posts)
    const{}=useActions()
    useEffect(()=> {

    },[])
    useEffect(()=>{
    },[loading])
    return(
        <div>
            !!!!!!!!
        </div>
    )
}
export default PostBlock;