import styles from "./AuthBrand.module.css";
import {CryptoPulseIcon} from "../../ui/Icons/CryptoPulseIcon.tsx";

export const AuthBrand = () => {
    return (
        <div className={styles.brand}>
            <CryptoPulseIcon/>
            <span>CryptoPulse</span>
        </div>
    );
};