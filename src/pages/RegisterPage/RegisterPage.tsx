import styles from './Register.module.css'
import {AuthBrand} from "../../components/Auth-UI/AuthBrand/AuthBrand.tsx";
import {AuthHero} from "../../components/Auth-UI/AuthHero/AuthHero.tsx";
import {AuthFooter} from "../../components/Auth-UI/AuthFooter/AuthFooter.tsx";
import RegisterForm from "../../components/forms/RegisterForm/RegisterForm.tsx";

export const RegisterPage = () => {
    return (
        <section className={styles.login}>
            <AuthBrand/>
            <AuthHero title={'Create your account'} subtitle={'Join CryptoPulse to track the crypto market'}/>
            <RegisterForm/>
            <AuthFooter text={'Already have an account?'} to={'/login'} linkText={'Sign in'}/>
        </section>
    );
};

