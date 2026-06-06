import {Link} from "react-router-dom";
import {Button} from "../../components/ui/Button/Button.tsx";
import {CryptoPulseIcon} from "../../components/ui/Icons/CryptoPulseIcon.tsx";
import {EyeIcon} from "../../components/ui/Icons/EyeIcon.tsx";
import {LoginIcon} from "../../components/ui/Icons/LoginIcon.tsx";
import {Input} from "../../components/ui/Input/Input.tsx";
import styles from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <section className={styles.login}>
            <div className={styles.brand}>
                <CryptoPulseIcon/>
                <span>CryptoPulse</span>
            </div>

            <div className={styles.hero}>
                <h1 className={styles.hero_title}>Welcome back</h1>

                <p className={styles.hero_subtitle}>
                    Sign in to continue tracking the crypto market
                </p>
            </div>

            <form className={styles.form}>

                <div className={styles.field}>
                    <label className={styles.label_field} htmlFor="email">
                        Email address
                    </label>

                    <div className={styles.control}>
                        <Input id={'email'} type={'email'} placeholder={'you@example.com'}/>
                    </div>
                </div>
                <div className={styles.field}>
                    <label className={styles.label_field} htmlFor="password">
                        Password
                    </label>

                    <div className={styles.control}>
                        <Input id={'password'} type={'password'} placeholder={'Enter your password'}/>

                        <button type="button" className={styles.eye_icon}>
                            <EyeIcon/>
                        </button>
                    </div>

                    <Link to={"#"} className={styles.forgot}>
                        Forgot password?
                    </Link>
                </div>


                <Button type={'submit'}>
                    <LoginIcon/>
                    <span>Sign in</span>
                </Button>
            </form>

            <div className={styles.footer}>
                <p className={styles.footer_text}>
                    Don't have an account?
                </p>

                <Link to="/register" className={styles.footer_link}>Create account</Link>
            </div>
        </section>
    );
};