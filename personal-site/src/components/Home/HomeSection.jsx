import styles from "./Home.module.css";
import heroImage from "../../assets/image2.png";
import githubImage from "../../assets/github-logo2.png"
import linkdIn from "../../assets/linkedin.png"
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
                        Hi, I'm a Software Developer with experience in backend projects and data engineering principles. I have a passion for learning new technologies and building projects that solve real-world problems. 
                        I'm currently looking for new opportunities to grow my skills and contribute to exciting projects.
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
                            <a className={styles.retroButton} href="https://drive.google.com/file/d/1IEcGsXlE2Z4hIBJJL8V_Kn0pDrlJCgUJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                            <a className={styles.gameButton} href="https://docs.google.com/document/d/1t0aUfLbsDhdu8VLkjwC05So0wfVle595E4uN15WJero/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Certifications</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
