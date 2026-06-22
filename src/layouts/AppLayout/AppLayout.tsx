import { Outlet } from "react-router-dom";
import Sidebar from "../../components/app-layout/Sidebar.tsx";
import Header from "../../components/app-layout/Header.tsx";
import styles from './AppLayout.module.css';

export const AppLayout = () => {
    return (
        <div className={styles.appLayout}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
                <main className="appMain">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};



