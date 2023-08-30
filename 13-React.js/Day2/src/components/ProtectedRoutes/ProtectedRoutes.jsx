import { Navigate, Outlet } from "react-router-dom";

function useAuth(){
    const user = {loggedIn: false};
    return user && user.loggedIn;
}

function ProtectedRoutes() {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/signUp"/>
}

export default ProtectedRoutes
