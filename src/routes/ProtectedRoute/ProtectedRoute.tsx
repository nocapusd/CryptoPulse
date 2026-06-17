import {Navigate, Outlet, useLocation} from "react-router-dom";
import {authService} from "../../services/auth.service.ts";

export const ProtectedRoute = () => {

    const location = useLocation();

    const isAuth = authService.isAuthenticated();

    if (!isAuth) {
        return <Navigate to={'/login'} replace state={{from: location}}/>
    }

    return (
        <Outlet/>
    );

};






