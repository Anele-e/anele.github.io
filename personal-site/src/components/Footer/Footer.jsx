import styles from './Footer.module.css';

export default function Footer() {
    return (
        <section className={styles.footerSection}>
            <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.text}>© 2026 Anele Dindili. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/anele-e" target="_blank" rel="noopener noreferrer">
                        Github 
                    </a>
                    <a href="https://linkedin.com/in/anele-dindili" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
        </section>
        
    );
}
