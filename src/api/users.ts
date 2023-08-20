import { storeAtCookies, storeAtLocalStorage } from "../utilities/tokenManage";
import api from "./ApiClient";

export const loginUser = async (data: {username: string, password: string}) => {
    try {
        const user = await api.post('/auth/login', data);
        if(user?.token) {
            const userDetail = {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                image: user.image,
                username: user.username,
            }
            storeAtLocalStorage('user', JSON.stringify(userDetail));
            storeAtCookies('token', user.token);
            return {status: true, user};
        }

        return {status: false};

    } catch (error) {
        return {status: false, error: (error as Error).message}
    }
}