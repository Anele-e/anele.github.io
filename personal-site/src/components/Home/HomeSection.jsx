import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import heroImage from "../../assets/image2.png";
import githubImage from "../../assets/github-logo2.png"
import linkdIn from "../../assets/linkedin.png"
import mailImg from "../../assets/icons8-mail-50.png"

const certificateHighlights = [
    {
        id: "python-intermediate-sololearn",
        issuer: "SoloLearn",
        title: "Python Intermediate",
        meta: "Programming Certificate",
        description: "Intermediate Python skills and applied programming concepts.",
        url: "https://www.sololearn.com/certificates/CC-QQRDZBDQ",
    },
    {
        id: "datacamp-associate-data-engineer",
        issuer: "DataCamp",
        title: "Associate Data Engineer",
        meta: "Track Statement of Accomplishment",
        description: "Data engineering foundations, pipelines, databases, and workflow tooling.",
        url: "https://www.datacamp.com/statement-of-accomplishment/track/365da9024e9d2c4280f11b1eb5920c822306fae2?raw=1",
    },
    {
        id: "sql-intermediate-sololearn",
        issuer: "SoloLearn",
        title: "SQL Intermediate",
        meta: "Database Certificate",
        description: "Intermediate SQL querying, data manipulation, and relational database concepts.",
        url: "https://www.sololearn.com/certificates/CC-3LLVERLE",
    },
    {
        id: "python-basic-hackerrank",
        issuer: "HackerRank",
        title: "Python Basic",
        meta: "Skills Certification",
        description: "Python fundamentals, problem solving, and core language usage.",
        url: "https://www.hackerrank.com/certificates/89a94dd90f0d",
    },
    {
        id: "relational-database-freecodecamp",
        issuer: "freeCodeCamp",
        title: "Relational Database",
        meta: "Developer Certification",
        description: "Relational database design, SQL, PostgreSQL, and command-line database work.",
        url: "https://www.freecodecamp.org/certification/aneledindili/relational-databases-v9",
    },
];

export default function Home() {
    const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);

    useEffect(() => {
        if (!isCertificatesOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsCertificatesOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isCertificatesOpen]);

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
                            <button type="button" className={styles.gameButton} onClick={() => setIsCertificatesOpen(true)}>View Certificates</button>
                        </div>
                    </div>
                </div>
                
            </div>
            {isCertificatesOpen && (
                <div className={styles.certificatesOverlay} onMouseDown={() => setIsCertificatesOpen(false)}>
                    <div
                        className={styles.certificatesPopup}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="certificates-title"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <header className={styles.certificatesHeader}>
                            <h2 id="certificates-title">Certificates</h2>
                            <button
                                type="button"
                                className={styles.certificatesClose}
                                aria-label="Close certificates"
                                onClick={() => setIsCertificatesOpen(false)}
                            >
                                x
                            </button>
                        </header>
                        <div className={styles.certificatesBody}>
                            <div className={styles.certificatesList}>
                                {certificateHighlights.map((certificate) => (
                                    <article key={certificate.id} className={styles.certificateCard}>
                                        <span className={styles.certificateIssuer}>{certificate.issuer}</span>
                                        <h3>{certificate.title}</h3>
                                        <span className={styles.certificateMeta}>{certificate.meta}</span>
                                        <p>{certificate.description}</p>
                                        <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                                            Open certificate
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
