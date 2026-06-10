import styles from "./LoginForm.module.css";
import {Input} from "../../ui/Input/Input.tsx";
import {Link} from "react-router-dom";
import {Button} from "../../ui/Button/Button.tsx";
import {LoginIcon} from "../../ui/Icons/LoginIcon.tsx";
import {EyeIcon} from "../../ui/Icons/EyeIcon.tsx";

const LoginForm = () => {
    return (
        <form className={styles.form}>

            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="email">
                    Email address
                </label>

                <div className={styles.control}>
                    <Input id={'email'} type={'email'} placeholder={'you@example.com'} />
                </div>
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="password">
                    Password
                </label>

                <div className={styles.control}>
                    <Input id={'password'} type={'password'} placeholder={'Enter your password'} />

                    <button type="button" className={styles.eye_icon}>
                        <EyeIcon />
                    </button>
                </div>

                <Link to={"#"} className={styles.forgot}>
                    Forgot password?
                </Link>
            </div>


            <Button type={'submit'}>
                <LoginIcon />
                <span>Sign in</span>
            </Button>
        </form>
    )
}

export default LoginForm