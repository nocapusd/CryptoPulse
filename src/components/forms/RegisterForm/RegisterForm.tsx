import styles from "./RegisterForm.module.css";
import {Input} from "../../ui/Input/Input.tsx";
import {EyeIcon} from "../../ui/Icons/EyeIcon.tsx";
import {RegisterIcon} from "../../ui/Icons/RegisterIcon.tsx";
import {Button} from "../../ui/Button/Button.tsx";

const RegisterForm = () => {
    return (
        <form className={styles.form}>

            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="name">
                    Full name
                </label>

                <div className={styles.control}>
                    <Input id={'name'} type={'text'} placeholder={'Your full name'} />
                </div>
            </div>
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
                    <Input id={'password'} type={'password'} placeholder={'Create a password'} />

                    <button type="button" className={styles.eye_icon}>
                        <EyeIcon />
                    </button>
                </div>

                <p className={styles.password_hint}>Use 8–64 characters with at least one letter and one number.</p>
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="confirmPassword">
                    Confirm password
                </label>

                <div className={styles.control}>
                    <Input id={'confirmPassword'} type={'password'} placeholder={'Repeat your password'} />

                    <button type="button" className={styles.eye_icon}>
                        <EyeIcon />
                    </button>
                </div>
            </div>

            <Button type={'submit'}>
                <RegisterIcon />
                <span>Create Account</span>
            </Button>
        </form>
    )
}

export default RegisterForm