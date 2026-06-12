import styles from "./LoginForm.module.css";
import {Input} from "../../ui/Input/Input.tsx";
import {Link} from "react-router-dom";
import {Button} from "../../ui/Button/Button.tsx";
import {LoginIcon} from "../../ui/Icons/LoginIcon.tsx";
import {EyeIcon} from "../../ui/Icons/EyeIcon.tsx";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {schema} from "../../../validators/LoginForm-Validator/joi-validator.ts";

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        mode: 'onChange',
        resolver: joiResolver(schema)
    });

    const onClickHandlerPassword = () => {
        setShowPassword(prev => !prev)
    }

    const onSubmitWithData = (data: any) => {
        console.log("FORM DATA:", data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmitWithData)} className={styles.form}>

            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="email">
                    Email address
                </label>

                <div className={styles.control}>
                    <Input {...register('email')}  error={!!errors.email} id={'email'} type={'email'} placeholder={'you@example.com'}/>
                </div>

                {errors.email &&
                    (<p className={styles.error}>{errors.email.message as string}</p>)
                }
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="password">
                    Password
                </label>

                <div className={styles.control}>
                    <Input {...register('password')} error={!!errors.password} id={'password'} type={showPassword ? 'text' : 'password'}
                           placeholder={'Enter your password'}/>

                    <button onClick={onClickHandlerPassword} type="button" className={styles.eye_icon}>
                        <EyeIcon/>
                    </button>
                </div>

                {errors.password &&
                    (<p className={styles.error}>{errors.password.message as string}</p>)
                }

                <Link to={"#"} className={styles.forgot}>
                    Forgot password?
                </Link>
            </div>


            <Button disabled={!isValid} type={'submit'}>
                <LoginIcon/>
                <span>Sign in</span>
            </Button>
        </form>
    )
}

export default LoginForm