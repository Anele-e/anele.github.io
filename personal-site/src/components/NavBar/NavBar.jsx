import { useState, useEffect } from "react";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
                <div className={styles.logo}>
                    Anele Dindili
                </div>

                <ul className={styles.navLinks}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button className={styles.burger}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <button className={styles.close}
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    >
                        ✕
                    </button>

                    <ul>
                        <li onClick={closeMenu}><a href="#about">About</a></li>
                        <li onClick={closeMenu}><a href="#projects">Projects</a></li>
                        <li onClick={closeMenu}><a href="#contact">Contact</a></li>
                        <li onClick={closeMenu}><a href="#education">Education</a></li>
                    </ul>
                </div>
            )}
        </>
    )
}
