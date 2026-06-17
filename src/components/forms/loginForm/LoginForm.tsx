import styles from "./LoginForm.module.css";
import {Input} from "../../ui/Input/Input.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "../../ui/Button/Button.tsx";
import {LoginIcon} from "../../ui/Icons/LoginIcon.tsx";
import {EyeIcon} from "../../ui/Icons/EyeIcon.tsx";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {schema} from "../../../validators/LoginForm-Validator/joi-validator.ts";
import type {LoginRequest} from "../../../types/auth.types.ts";
import {login} from "../../../api/auth.api.ts";
import {authService} from "../../../services/auth.service.ts";
import {AxiosError} from "axios";

const LoginForm = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [serverError, setServerError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<LoginRequest>({
        mode: 'onChange',
        resolver: joiResolver(schema)
    });

    const onClickHandlerPassword = () => {
        setShowPassword(prev => !prev)
    }

    const onSubmitWithData = async (data: LoginRequest) => {
        try {
            setServerError('')
            setIsLoading(true)

            const user = await login(data);

            authService.saveToken(user.accessToken)
            navigate('/dashboard')
        } catch (error) {
            if (!(error instanceof AxiosError)) {
                setServerError('Unexpected error');
                return;
            }

            if (!error.response) {
                setServerError('Network error. Please check your internet connection.');
                return;
            }

            switch (error.response?.status) {
                case 400:
                    setServerError('Invalid username or password');
                    break;
                case 500:
                    setServerError('Internal server error');
                    break
                default:
                    setServerError('Something went wrong');
            }
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmitWithData)} className={styles.form}>

            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="username">
                    Username
                </label>

                <div className={styles.control}>
                    <Input disabled={isLoading} {...register('username')} error={!!errors.username} id={'username'}
                           type={'text'}
                           placeholder={'enter your username'}/>
                </div>

                {errors.username &&
                    (<p className={styles.error}>{errors.username.message as string}</p>)
                }
            </div>
            <div className={styles.field}>
                <label className={styles.label_field} htmlFor="password">
                    Password
                </label>

                <div className={styles.control}>
                    <Input disabled={isLoading} {...register('password')} error={!!errors.password} id={'password'}
                           type={showPassword ? 'text' : 'password'}
                           placeholder={'Enter your password'}/>

                    <button onClick={onClickHandlerPassword} type="button" className={styles.eye_icon}>
                        <EyeIcon/>
                    </button>
                </div>

                {errors.password &&
                    (<p className={styles.error}>{errors.password.message as string}</p>)
                }
                {
                    serverError && <p className={styles.error}>{serverError}</p>
                }
            </div>


            <Button disabled={!isValid || isLoading} type={'submit'}>
                <LoginIcon/>
                <span>
                    {isLoading ? 'Signing in...' : 'Sign in'}
                </span>
            </Button>
        </form>
    )
}

export default LoginForm