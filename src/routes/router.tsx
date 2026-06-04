import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout/AppLayout.tsx";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout.tsx";
import { RootLayout } from "../layouts/RootLayout/RootLayout.tsx";
import { CoinDetailPage } from "../pages/CoinDetailPage/CointDetailPage.tsx";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage.tsx";
import { LoginPage } from "../pages/LoginPage/LoginPage.tsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.tsx";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage.tsx";
import { WatchlistPage } from "../pages/WatchlistPage/WatchlistPage.tsx";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/dashboard'} replace />,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />,
                    }
                ]
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <AppLayout />,
                        children: [
                            {
                                path: 'dashboard',
                                element: <DashboardPage />,
                            },
                            {
                                path: "watchlist",
                                element: <WatchlistPage />,
                            },
                            {
                                path: "coin/:coinId",
                                element: <CoinDetailPage />,
                            },
                        ]
                    }
                ]
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
])

