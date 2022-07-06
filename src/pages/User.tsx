import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IUser} from "../types/user";

type UserItemPageParams = {
    id: string
}
const User: FC = () => {
    const params = useParams<UserItemPageParams>()
    const {users,loading,error}=useTypedSelector(state => state.user)
    let user:IUser|undefined;
    const {fetchUser}=useActions()
    useEffect(()=>{

        switch (typeof params.id){
            case 'string':
                fetchUser(parseInt(params.id))
                break
            default:
                fetchUser(-1)
                break
        }
    },[])
    if (loading){
        return (
            <h1>Идёт загрузка...</h1>
        )
    }
    if(error){
        return (
            <h1>Произошла ошибка</h1>
        )
    }

    return (

        <div>
            <div>
                {users[0]?.name}
            </div>
        </div>
    );
};

export default User;