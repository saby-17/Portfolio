import React from 'react'
import styles from './ProjectCard.module.css'


export default function ProjectCard({project}){
return (
<article className={styles.card} aria-labelledby={`proj-${project.id}`}>
<div className={styles.head}>
<h3 id={`proj-${project.id}`}>{project.title}</h3>
</div>
<p className={styles.desc}>{project.description}</p>
<div className={styles.meta}>
<div className={styles.tech}>{project.tech.join(' • ')}</div>
<a className={styles.link} href={project.link} aria-label={`Open ${project.title}`}>View</a>
</div>
</article>
)
}