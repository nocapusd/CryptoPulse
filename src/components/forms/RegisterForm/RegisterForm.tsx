import styles from "./RegisterForm.module.css";
import {Input} from "../../ui/Input/Input.tsx";
import {EyeIcon} from "../../ui/Icons/EyeIcon.tsx";
import {RegisterIcon} from "../../ui/Icons/RegisterIcon.tsx";
import {Button} from "../../ui/Button/Button.tsx";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {schema} from "../../../validators/RegisterForm-Validator/joi-validator.ts";


const RegisterForm = () => {
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange', resolver: joiResolver(schema)});

    const onSubmit = (data: any) => {
        console.log("FORM DATA:", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

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
                    <Input id={'password'} error={!!errors.password} {...register('password')}
                           placeholder={'Create a password'}/>

                    <button type="button" className={styles.eye_icon}>
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
                    <Input id={'confirmPassword'} error={!!errors.confirmPassword} {...register('confirmPassword')}
                           placeholder={'Repeat your password'}/>

                    <button type="button" className={styles.eye_icon}>
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