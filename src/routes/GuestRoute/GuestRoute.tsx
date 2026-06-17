import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../../services/auth.service.ts";

export const GuestRoute = () => {

    const isAuth = authService.isAuthenticated();

    if (isAuth) {
        return <Navigate to={'/dashboard'} replace/>
    }

    return (
        <Outlet/>
    );
};