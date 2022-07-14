import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../types/post";
import {Card} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import post from "../pages/Post";
import {IUser} from "../types/user";
import FetchingUserService from "../API/UserService";
import axios from "axios";
import UserService from "../API/UserService";
import cl from './PostItem.module.scss'
import {useNavigate} from "react-router-dom";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = (post) => {

    const [user, setUser] = useState<IUser>()
    const navigate = useNavigate()

    async function fetching() {
        try {
            const response = await UserService.getUserById(post.post.userId)
            setUser(response)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetching().then()
    }, [])

    return (
        <Card bg='white' text={"dark"} className={cl.card}>
            <Card.Body>

                {post.post.title ?
                    <Card.Title
                        onClick={() => navigate('/posts/' + post.post.id)}>№{post.post.id} {post.post.title}</Card.Title> :
                    <Card.Title onClick={() => navigate('/posts/' + post.post.id)}>{post.post.id} PostTitle is
                        undefined</Card.Title>
                }


                {post.post.body ?
                    <Card.Text onClick={() => navigate('/posts/' + post.post.id)}>
                        {post.post.body}
                    </Card.Text> :
                    <Card.Text>
                        Message is empty
                    </Card.Text>
                }

                {user?.name ?
                    <Card.Text onClick={() => navigate('/users/' + post.post.userId)}>
                        {user?.name}
                    </Card.Text> :
                    <Card.Text>
                        Creator undefined
                    </Card.Text>
                }

            </Card.Body>
        </Card>

    );
};

export default PostItem;