import React from 'react'
import styles from './Footer.module.css'


export default function Footer(){
return (
<footer className={styles.footer}>
<div className="container row">
<div className="col">
<strong>Sabhya Sirohi</strong>
<span className="hint">© {new Date().getFullYear()}</span>
</div>
<div className={styles.links}>
<a href="#">Twitter</a>
<a href="#">GitHub</a>
<a href="#">LinkedIn</a>
</div>
</div>
</footer>
)
}