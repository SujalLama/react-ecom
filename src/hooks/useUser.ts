import { useContext, useEffect } from "react"
import { UserContext, UserContextType } from "../utilities/UserProvider";
import { retrieveFromLocalStorage } from "../utilities/tokenManage";


export default function useUser () {
    const {user, setUser} = useContext(UserContext) as UserContextType;
    
    useEffect(() => {
        if(retrieveFromLocalStorage('user') !== null) {
            setUser(retrieveFromLocalStorage('user'))
        }
    }, [setUser])

    return {user, setUser}
}