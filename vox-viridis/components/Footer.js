import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                Vox-Viridis
            </a>
        </footer>
    );
}
