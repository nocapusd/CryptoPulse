import styles from "./Button.module.css";

type ButtonProps = {
    variant?: 'primary' | 'ghost';
}

export const Button = ({variant = 'primary'}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant]} ?? ''`}>Click me</button>
    );
};