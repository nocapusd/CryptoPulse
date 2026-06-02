import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost';
}
export const Button = ({variant = 'primary', ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant] ?? ''}`} {...props}>Click me</button>
    );
};



