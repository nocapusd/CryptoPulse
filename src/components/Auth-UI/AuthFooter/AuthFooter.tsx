import styles from "./AuthFooter.module.css";
import {Link} from "react-router-dom";

type AuthFooterProps = {
    text: string;
    to: string;
    linkText: string;
}

export const AuthFooter = ({text, to, linkText}: AuthFooterProps) => {
    return (
        <div className={styles.footer}>
            <p className={styles.footer_text}>
                {text}
            </p>

            <Link to={to} className={styles.footer_link}>{linkText}</Link>
        </div>
    );
};