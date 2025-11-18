import React from 'react'
import styles from './Contact.module.css'


export default function Contact(){
return (
<section className={`section ${styles.contact}`} id="contact">
<h2>Contact</h2>
<p className="hint">Interested in working together? Send a message or reach me on social media.</p>
<form className={styles.form} onSubmit={(e)=>{e.preventDefault();alert('Demo: form submitted')}}>
<label>
<span className={styles.label}>Name</span>
<input name="name" required />
</label>
<label>
<span className={styles.label}>Email</span>
<input name="email" type="email" required />
</label>
<label>
<span className={styles.label}>Message</span>
<textarea name="message" rows={5} required />
</label>
<button type="submit" className={styles.submit}>Send message</button>
</form>
</section>
)
}