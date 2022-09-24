import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://franky-lim24.github.io/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Franky Lim
            </a>
        </footer>
    );
}
