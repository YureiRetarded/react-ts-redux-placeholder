import React, {FC} from 'react';
import {IUser} from "../types/user";
import cl from "./styles/PostItem.module.scss";
import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = (user) => {

    const navigate = useNavigate()


    return (
        <Card bg='white' text={"dark"} className={cl.card}>
            <Card.Body>

                {user.user.name ?
                    <Card.Title
                        className={cl.card_btn}
                        onClick={() => navigate('/react-ts-redux-placeholder/users/' + user.user.id)}>{user.user.name}</Card.Title> :
                    <Card.Title
                        className={cl.card_btn}
                        onClick={() => navigate('/react-ts-redux-placeholder/users/' + user.user.id)}>Name is undefined</Card.Title>
                }

                <Card.Text>
                    {user.user?.phone}
                </Card.Text>
                <Card.Text>
                    {user.user?.email}
                </Card.Text>


            </Card.Body>
        </Card>
    );
};

export default UserItem;