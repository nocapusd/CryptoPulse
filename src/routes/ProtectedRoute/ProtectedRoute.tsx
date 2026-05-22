import {Navigate, Outlet, useLocation} from "react-router-dom";

export const ProtectedRoute = () => {

    const location = useLocation();

    const isAuth = false;

    if (!isAuth) {
        return <Navigate to={'/login'} replace={true} state={{from: location}}/>
    }

    return (
        <Outlet/>
    );
};

