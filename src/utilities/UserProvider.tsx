import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    username: string;
} 

export const initialUser: User  = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    username: '',
}

export interface UserContextType {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider ({children} : PropsWithChildren){
    const [user, setUser] = useState(initialUser);

    const value = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}