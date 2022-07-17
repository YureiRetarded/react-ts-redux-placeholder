import React, {FC} from 'react';
import {useActions} from "../hooks/useActions";
import {clearAllUsers} from "../store/action-creators/users";

import UsersList from "../components/UsersList";

const Users: FC = () => {
    const {clearAllUsers} = useActions();
    clearAllUsers()
    return (
        <div>
            <UsersList/>
        </div>
    );
};

export default Users;