import styles from './Education.module.css';
import umuziLogo from "../../assets/umuzi-logo.jpeg";
import stellenboschLogo from "../../assets/SUN_logo.png";

const educationData = [
    {
        id:1,
        institution: "Umuzi",
        logo: umuziLogo,
        programme: "National Certificate in Information Technology (System Development)\n(SAQA ID 48872)", 
        year: "2024 - 2025",
        description: "A comprehensive program focused on software development, covering programming languages, software engineering principles, and practical projects to prepare students for careers in the tech industry."
    },
    {
        id:2,
        institution: "University of Stellenbosch",
        logo: stellenboschLogo,
        programme: "Bsc Chemistry (Chemistry and Polymer Science)", 
        year: "2019 - 2021(incomplete)",
        description: "Undergraduate program that provided a strong foundation in chemical principles, laboratory techniques, and research methodologies, with a focus on polymer science and its applications."
    },
]
export default function Education() {
    return (
        <section className={styles.education} id="education">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Education</h2>
                </header>

                <div className={styles.timeline}>
                    <div className={styles.line} aria-hidden="true" />

                    <div className={styles.entries}>
                        {educationData.map((entry, index) => (
                            <article key={entry.id}
                                className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}>
                                    <div className={styles.institutionHeader}
                                        style={{ flexDirection : index % 2 == 0 ? 'row-reverse' : 'row' }}>
                                        <span className={styles.institution}>{entry.institution}</span>
                                        <img src={entry.logo} alt={`${entry.institution} Logo`} className={styles.logo} />
                                    </div>
                                    <h3 className={styles.degree}>{entry.programme}</h3>
                                    <span className={styles.year}>{entry.year}</span>
                                    <p className={styles.description}>{entry.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}