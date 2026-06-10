import styles from './LoginPage.module.css';
import {AuthBrand} from "../../components/Auth-UI/AuthBrand/AuthBrand.tsx";
import {AuthHero} from "../../components/Auth-UI/AuthHero/AuthHero.tsx";
import {AuthFooter} from "../../components/Auth-UI/AuthFooter/AuthFooter.tsx";
import LoginForm from "../../components/forms/loginForm/LoginForm.tsx";

export const LoginPage = () => {
    return (
        <section className={styles.login}>
            <AuthBrand/>
            <AuthHero title={'Welcome back'} subtitle={'Sign in to continue tracking the crypto market'}/>
            <LoginForm/>
            <AuthFooter text={'Don\'t have an account?'} to={'/register'} linkText={'Create account'}/>
        </section>
    );
};
