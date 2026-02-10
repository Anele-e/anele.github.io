import styles from "./Projects.module.css";


export default function Projects() {
    const projects = [
        {id: "full-stack-1", title: "TRADE.TWO", category: "Full Stack", description: "A web application that connects workers with clients looking for plumbers, electricians, and other tradespeople. Built with React, FastApi, Docker, and postgreSQL.", techStack: ["React", "FastAPI", "Docker", "PostgreSQL"], repoLink: "https://github.com/Anele-e/TRADE_TWO"},
         {id: "consume-github-api", title: "Consume GitHub API", category: "Python", description: "Built a simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal.", techStack: ["Python", "CLI tools", "API"], repoLink: "https://github.com/Anele-e/github-user-activity"},
         {id: "expanse-tracker", title: "Expense Tracker", category: "Python", description: "A Python-based expense tracking application with a command-line interface.", techStack: ["Python", "CLI tools"], repoLink: "https://github.com/Anele-e/Expense-Tracker"},
        {id: "full-stack-2", title: "Dummy", category: "Full Stack", description: "Still in development.", techStack: ["API", "Python", "Airflow"], repoLink: "https://github.com/Anele-e"},
    ];
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Projects</h2>
                    <p className={styles.subtitle}>
                        A selection of systems, games and data-focused work
                    </p>
                </header>
                <div className={styles.projectGrid}>
                    {projects.map(project => (
                        <article key={project.id} className={styles.projectCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.projectCategory}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                            </div>
                            <p className={styles.projectDescription}>{project.description}</p>

                            <ul className={styles.projectTechStack}>
                                {project.techStack.map(tech => (
                                    <li key={tech} className={styles.techItem}>{tech}</li>
                                ))}
                            </ul>

                            <div className={styles.actions}>
                                {project.hasVideo && (
                                    <button className={styles.previewButton}>View Gameplay</button>
                                )}
                                <a href={project.repoLink} 
                                target="_blank" rel="noreferrer" className={styles.repoLink}>
                                    View Code
                                </a>
                            </div>
                        </article>
                    ))}
                    
                        
                    
                </div>
            </div>
        </section>
    );
}
