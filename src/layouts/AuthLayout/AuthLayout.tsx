import {Outlet} from "react-router-dom";
import styles from './AuthLayout.module.css';

export const AuthLayout = () => {
    return (
        <main className={styles.layout}>
            <div className={styles.card}>
                <Outlet/>
            </div>
        </main>
    );
};