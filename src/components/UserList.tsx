import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return (
            <div>
                <h3>Идёт загрузка...</h3>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h3>Ошибка загрузки...</h3>
            </div>
        )
    }
    return (
        <div>
            {
                users.map(user=>
                    <div key={user.id}>{user.name}</div>
                )
            }
        </div>
    );
};

export default UserList;