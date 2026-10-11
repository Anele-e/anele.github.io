import styles from "./Projects.module.css";

const techLogos = {
    React: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="4.5" fill="currentColor" />
            <ellipse cx="32" cy="32" rx="24" ry="9" fill="none" stroke="currentColor" strokeWidth="3" />
            <ellipse cx="32" cy="32" rx="24" ry="9" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="24" ry="9" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(120 32 32)" />
        </svg>
    ),
    FastAPI: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M36 8 18 36h13l-4 20 20-31H34z" fill="currentColor" />
        </svg>
    ),
    Docker: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <path d="M13 35h36c-2 9-8 14-18 14S16 44 13 35Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <rect x="16" y="25" width="8" height="8" fill="currentColor" />
            <rect x="26" y="25" width="8" height="8" fill="currentColor" />
            <rect x="36" y="25" width="8" height="8" fill="currentColor" />
            <rect x="26" y="15" width="8" height="8" fill="currentColor" />
            <path d="M49 31h5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    PostgreSQL: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <ellipse cx="32" cy="17" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M14 17v24c0 4 8 8 18 8s18-4 18-8V17" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M14 29c0 4 8 8 18 8s18-4 18-8" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M26 20h9c5 0 8 2 8 6s-3 6-8 6h-4v9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Python: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <path d="M30 8h13c5 0 9 4 9 9v10H27c-8 0-15 6-15 14v1h12v-3c0-5 4-9 9-9h10V18H30z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <path d="M34 56H21c-5 0-9-4-9-9V37h25c8 0 15-6 15-14v-1H40v3c0 5-4 9-9 9H21v12h13z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="39" cy="16" r="2.5" fill="currentColor" />
            <circle cx="25" cy="48" r="2.5" fill="currentColor" />
        </svg>
    ),
    "CLI tools": (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <rect x="9" y="14" width="46" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="m19 27 7 6-7 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 40h14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    API: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="17" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="47" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="47" cy="46" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M24 29 40 21M24 35l16 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    SQL: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <ellipse cx="32" cy="17" rx="19" ry="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M13 17v27c0 4 9 8 19 8s19-4 19-8V17" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M13 31c0 4 9 8 19 8s19-4 19-8" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
    ),
    Airflow: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="4" fill="currentColor" />
            <path d="M32 8c7 7 7 13 0 20-7-7-7-13 0-20ZM56 32c-7 7-13 7-20 0 7-7 13-7 20 0ZM32 56c-7-7-7-13 0-20 7 7 7 13 0 20ZM8 32c7-7 13-7 20 0-7 7-13 7-20 0Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </svg>
    ),
    "Power Bi": (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <rect x="14" y="30" width="8" height="20" rx="2" fill="currentColor" />
            <rect x="28" y="20" width="8" height="30" rx="2" fill="currentColor" opacity="0.75" />
            <rect x="42" y="12" width="8" height="38" rx="2" fill="currentColor" opacity="0.45" />
            <path d="M11 53h42" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
}

function TechLogo({ tech }) {
    return (
        <span className={styles.logoMark}>
            {techLogos[tech] ?? <span>{tech.slice(0, 2).toUpperCase()}</span>}
        </span>
    )
}


export default function Projects() {
    const projects = [
        {id: "full-stack-1", title: "TRADE.TWO", category: "Full Stack", description: "A web application that connects workers with clients looking for plumbers, electricians, and other tradespeople. Built with React, FastApi, Docker, and postgreSQL.", techStack: ["React", "FastAPI", "Docker", "PostgreSQL"], repoLink: "https://github.com/Anele-e/TRADE_TWO"},
        {id: "monitor-crime-and-talent", title: "Monitor Crime and Talent", category: "Data Platform", description: "A SAPS crime-monitoring platform that ingests public crime statistics with Airflow, stores geospatial station data in PostGIS, exposes FastAPI endpoints, and presents an interactive React dashboard.", techStack: ["React", "FastAPI", "Airflow", "PostgreSQL", "Docker"], repoLink: "https://github.com/monitor-crime-talent-org/monitor-crime-and-talent"},
         {id: "consume-github-api", title: "Consume GitHub API", category: "Python", description: "Built a simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal.", techStack: ["Python", "CLI tools", "API"], repoLink: "https://github.com/Anele-e/github-user-activity"},
         {id: "expanse-tracker", title: "Expense Tracker", category: "Python", description: "A Python-based expense tracking application with a command-line interface.", techStack: ["Python", "CLI tools"], repoLink: "https://github.com/Anele-e/Expense-Tracker"},
        {id: "south-african-reading-trends", title: "south-african-reading-trends", category: "Data Focused", description: "Ingesting book data from differnt sources to analyze the reading trends of South Africans", techStack: ["API", "Python","SQL", "Airflow", "Power Bi"], repoLink: "https://github.com/Anele-e/south_african_reading_trends.git"},
    ];
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Projects</h2>
                    <p className={styles.subtitle}>
                        A showcase of projects I've built and continue to develop.
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
                                    <li key={tech} className={styles.techItem} aria-label={tech} data-label={tech} tabIndex="0">
                                        <TechLogo tech={tech} />
                                    </li>
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
