import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost';
    children?: React.ReactNode;
}
export const Button = ({variant = 'primary',children, ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant] ?? ''}`} {...props}>
            {children}
        </button>
    );
};



