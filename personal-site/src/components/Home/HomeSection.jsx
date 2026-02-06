import styles from "./Home.module.css";
import heroImage from "../../assets/image2.png";
import githubImage from "../../assets/icons8-github-24.png"
import linkdIn from "../../assets/icons8-linkedin-48.png"
import mailImg from "../../assets/icons8-mail-50.png"


export default function Home() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.inner}>
                <div className={styles.imageWrapper}>
                    <img src={heroImage}
                        alt="Anele Dindili Profile"
                        className={styles.image}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        <span>Anele Dindili</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Hi, i'm a Software Engineer with balajfasihfasiififhwwa<br />fdhy
                        reguherwiuhgieurhtigauerhguhdfsiuhgvhdsfgiuhiauewrhgiuh<br />
                        uyguyfouyiuhretieurhtieruhgidhfiguhieruhdxgvifdhgidfgifhdg.
                    </p>
               

                    <div className={styles.contactImgs}>
                        <div className={styles.contactButton}>
                            <a href="https://github.com/Anele-e" target="_blank" rel="noreferrer">
                                <img src={githubImage} alt="Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/anele-dindili/" target="_blank" rel="noreferrer">
                                <img src={linkdIn} alt="Linkdin" />
                            </a>

                            <a href="" target="_blank" rel="noreferrer">
                                <img src={mailImg} alt="Mail" />
                            </a>
                        </div>
                        <div className={styles.buttonsStyle}>
                            <div>
                                <button className={styles.retroButton}><a href="#about" download>Download CV</a></button>
                            </div>
                            <div>
                                <button className={styles.gameButton}><a href="#about" target="_blank">Card Game</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
