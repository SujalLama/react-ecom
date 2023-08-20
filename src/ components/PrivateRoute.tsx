import { Navigate, Outlet, useLocation } from "react-router-dom"
import { retrieveFromCookies } from "../utilities/tokenManage"

export default function PrivateRoute () {
    const token = retrieveFromCookies('token');
    
    const {state} = useLocation();

    
    if(token) {
        return <Outlet />
    }

    return <Navigate to={state?.backLink || '/login'} replace={true} />
}