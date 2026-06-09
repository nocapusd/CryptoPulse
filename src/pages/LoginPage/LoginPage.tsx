import {Link} from "react-router-dom";
import {Button} from "../../components/ui/Button/Button.tsx";
import {EyeIcon} from "../../components/ui/Icons/EyeIcon.tsx";
import {LoginIcon} from "../../components/ui/Icons/LoginIcon.tsx";
import {Input} from "../../components/ui/Input/Input.tsx";
import styles from './LoginPage.module.css';
import {AuthBrand} from "../../components/Auth-UI/AuthBrand/AuthBrand.tsx";
import {AuthHero} from "../../components/Auth-UI/AuthHero/AuthHero.tsx";
import {AuthFooter} from "../../components/Auth-UI/AuthFooter/AuthFooter.tsx";

export const LoginPage = () => {
    return (
        <section className={styles.login}>
            <AuthBrand/>
            <AuthHero title={'Welcome back'} subtitle={'Sign in to continue tracking the crypto market'}/>

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

            <AuthFooter text={'Don\'t have an account?'} to={'/register'} linkText={'Create account'}/>
        </section>
    );
};



