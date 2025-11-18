import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'


const demoProjects = [
{ id:1, title:'Portfolio Website', description:'A modern portfolio built with React and CSS Modules.', tech:['React','Vite','CSS Modules'], link:'#' },
{ id:2, title:'University Application', description:'A task of transforming kuk wesite into a user friendly mobile application', tech:['XML','Java', 'Android Studio'], link:'#' },
{ id:3, title:'COVID Tracker', description:'A website is build to track down the recent cases, news and advancements in COVID era', tech:['HTML','CSS','JavaScript'], link:'#' }
]


export default function Projects(){
return (
<section className={`section ${styles.projects}`} id="projects">
<h2>Projects</h2>
<div className={styles.grid}>
{demoProjects.map(p => <ProjectCard key={p.id} project={p} />)}
</div>
</section>
)
}