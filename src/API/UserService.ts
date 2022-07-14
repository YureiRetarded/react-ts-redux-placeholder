import axios from "axios";
import {IUser} from "../types/user";

export default class UserService {
    static async getUserById(id: number) {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
        return (response.data);
    }
}