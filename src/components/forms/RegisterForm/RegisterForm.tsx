import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {schema} from "../../../validators/RegisterForm-Validator/joi-validator.ts";
import {Button} from "../../ui/Button/Button.tsx";
import {EyeIcon} from "../../ui/Icons/EyeIcon.tsx";
import {RegisterIcon} from "../../ui/Icons/RegisterIcon.tsx";
import {Input} from "../../ui/Input/Input.tsx";
import styles from "./RegisterForm.module.css";
import {useState} from "react";


const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange', resolver: joiResolver(schema)});

    const onSubmitWithData = (data: any) => {
        console.log("FORM DATA:", data);
    }

    const onClickHandlerPassword = () => {
        setShowPassword(prev => !prev)
    }

    const onClickHandlerConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev)
    }

    return (
        <form onSubmit={handleSubmit(onSubmitWithData)} className={styles.form}>

            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="name">
                    Full name
                </label>

                <div className={styles.control}>
                    <Input id={'name'} error={!!errors.name} {...register('name')} placeholder={'Your full name'}/>
                </div>

                {errors.name && (
                    <p className={styles.error}>{errors.name.message as string}</p>
                )}
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="email">
                    Email address
                </label>

                <div className={styles.control}>
                    <Input id={'email'} error={!!errors.email} {...register('email')} placeholder={'you@example.com'}/>
                </div>

                {errors.email && (
                    <p className={styles.error}>{errors.email.message as string}</p>
                )}
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="password">
                    Password
                </label>

                <div className={styles.control}>
                    <Input type={showPassword ? 'text' : 'password'} id={'password'}
                           error={!!errors.password} {...register('password')}
                           placeholder={'Create a password'}/>

                    <button onClick={onClickHandlerPassword} type="button" className={styles.eye_icon}>
                        <EyeIcon/>
                    </button>
                </div>

                {errors.password && (
                    <p className={styles.error}>{errors.password.message as string}</p>
                )}

                <p className={styles.password_hint}>Use 8–64 characters with at least one letter and one number.</p>
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="confirmPassword">
                    Confirm password
                </label>

                <div className={styles.control}>
                    <Input type={showConfirmPassword ? 'text' : 'password'} id={'confirmPassword'}
                           error={!!errors.confirmPassword} {...register('confirmPassword')}
                           placeholder={'Repeat your password'}/>

                    <button onClick={onClickHandlerConfirmPassword} type="button" className={styles.eye_icon}>
                        <EyeIcon/>
                    </button>
                </div>

                {errors.confirmPassword && (
                    <p className={styles.error}>{errors.confirmPassword.message as string}</p>
                )}
            </div>

            <Button type={'submit'} disabled={!isValid}>
                <RegisterIcon/>
                <span>Create Account</span>
            </Button>
        </form>
    )
}

export default RegisterForm