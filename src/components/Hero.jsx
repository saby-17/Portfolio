import React from 'react'
import styles from './Hero.module.css'


export default function Hero(){
return (
<section className={`${styles.hero} section`} id="home">
<div className={styles.inner}>
<div>
<h1 className={styles.title}>Hi, I’m <span className={styles.accent}>Your Name</span></h1>
<p className={styles.lead}>I build elegant web apps with React. I care about accessible and maintainable front-end architecture.</p>
<div className={styles.ctaRow}>
<a className={styles.primaryBtn} href="#projects">See my work</a>
<a className={styles.ghostBtn} href="#contact">Get in touch</a>
</div>
</div>
<div className={styles.avatarCard} aria-hidden>
<div className={styles.avatarPlaceholder}>Your Photo</div>
</div>
</div>
</section>
)
}