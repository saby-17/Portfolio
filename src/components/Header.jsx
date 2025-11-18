import React, {useState} from 'react'
import styles from './Header.module.css'


export default function Header(){
const [open, setOpen] = useState(false)
return (
<header className={styles.header}>
<div className={styles.brand}>
<div className={styles.logoDot} aria-hidden />
<a href="#" className={styles.logoText}>Sabhya Sirohi</a>
</div>


<nav className={`${styles.nav} ${open? styles.open : ''}`} aria-label="Primary navigation">
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</nav>


<div className={styles.actions}>
<input className={styles.search} placeholder="Search projects..." aria-label="Search" />
<button className={styles.hamburger} aria-expanded={open} onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">☰</button>
</div>
</header>
)
}