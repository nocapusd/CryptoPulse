import styles from "./AuthHero.module.css";

type AuthHeroProps = {
    title: string;
    subtitle: string;
}

export const AuthHero = ({title, subtitle}: AuthHeroProps) => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.hero_title}>{title}</h1>

            <p className={styles.hero_subtitle}>
                {subtitle}
            </p>
        </div>
    );
};