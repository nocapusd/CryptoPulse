import styles from './Register.module.css'
import {AuthBrand} from "../../components/Auth-UI/AuthBrand/AuthBrand.tsx";
import {AuthHero} from "../../components/Auth-UI/AuthHero/AuthHero.tsx";
import {Input} from "../../components/ui/Input/Input.tsx";
import {EyeIcon} from "../../components/ui/Icons/EyeIcon.tsx";
import {Button} from "../../components/ui/Button/Button.tsx";
import {AuthFooter} from "../../components/Auth-UI/AuthFooter/AuthFooter.tsx";
import {RegisterIcon} from "../../components/ui/Icons/RegisterIcon.tsx";

export const RegisterPage = () => {
    return (
        <section className={styles.login}>
            <AuthBrand/>
            <AuthHero title={'Create your account'} subtitle={'Join CryptoPulse to track the crypto market'}/>

            <form className={styles.form}>

                <div className={styles.field}>
                    <label className={styles.label_field} htmlFor="name">
                        Full name
                    </label>

                    <div className={styles.control}>
                        <Input id={'name'} type={'text'} placeholder={'Your full name'}/>
                    </div>
                </div>
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
                        <Input id={'password'} type={'password'} placeholder={'Create a password'}/>

                        <button type="button" className={styles.eye_icon}>
                            <EyeIcon/>
                        </button>
                    </div>

                    <p className={styles.password_hint}>Use 8–64 characters with at least one letter and one number.</p>
                </div>
                <div className={styles.field}>
                    <label className={styles.label_field} htmlFor="confirmPassword">
                        Confirm password
                    </label>

                    <div className={styles.control}>
                        <Input id={'confirmPassword'} type={'password'} placeholder={'Repeat your password'}/>

                        <button type="button" className={styles.eye_icon}>
                            <EyeIcon/>
                        </button>
                    </div>
                </div>


                <Button type={'submit'}>
                    <RegisterIcon/>
                    <span>Create Account</span>
                </Button>
            </form>

            <AuthFooter text={'Already have an account?'} to={'/login'} linkText={'Sign in'}/>
        </section>
    );
};