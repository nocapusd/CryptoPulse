import styles from './Input.module.css'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
}

export const Input = ({error, ...props}: InputProps) => {
    return <input {...props} className={`${styles.input} ${error ? styles.inputError : ''}`}/>
};

