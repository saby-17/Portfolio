import React from 'react'
import styles from './About.module.css'


export default function About(){
return (
<section className={`section ${styles.about}`} id="about">
<h2>About</h2>
<div className={styles.content}>
<p>
I am a passionate educator and technology enthusiast with over 3 years of teaching experience in Computer Science at the university level. I enjoy simplifying complex topics and helping students connect theory with real-world applications.
Alongside teaching, I explore mobile application, cyber security, ethical hacking and web development. My goal is to combine education and technology — to keep learning, creating, and sharing knowledge that inspires others.
</p>
<div className={styles.skills}>
<h3>Skills</h3>
<ul>
<li>Mobile Application Development </li>
<li>CSS Modules & Responsive Layouts</li>
<li>Java Modules</li>
<li>Ethical Hacking</li>
<li>Search Engine Optimization </li>
<li>Digital Marketing </li>
</ul>
</div>
</div>
</section>
)
}