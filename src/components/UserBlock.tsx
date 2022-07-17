import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import cl from "./styles/PostItem.module.scss";
import {Container} from "react-bootstrap";

interface UserBlockProps {
    userId: number
}

const UserBlock: FC<UserBlockProps> = ({userId}) => {
    const {user, loading, error} = useTypedSelector(state => state.user)
    const {fetchUser} = useActions();
    useEffect(() => {
        fetchUser(userId)
    }, [])
    return (
        <div>
            <h2>
                {user?.name}
            </h2>
            <p>
                {user?.phone}
            </p>
            <p>
                {user?.email}
            </p>

        </div>
    );
};

export default UserBlock;