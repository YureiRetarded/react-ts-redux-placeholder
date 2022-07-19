import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useNavigate} from "react-router-dom";

interface UserBlockProps {
    userId: number
}

const UserBlock: FC<UserBlockProps> = ({userId}) => {
    const navigate = useNavigate()
    const {user, loading, error} = useTypedSelector(state => state.user)
    const {fetchUser} = useActions();
    useEffect(() => {
        fetchUser(userId)
    }, [])
    if (error === '404') {
        navigate('/users/not_found_user')
    }
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