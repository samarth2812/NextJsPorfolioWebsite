import React from 'react'
import styles from '@/styles/Home.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
  <div className={styles.footer__addr}>
    <h1 className={styles.footer__logo}>Samarth Dhawan</h1>
        
    <h2>Contact</h2>
    
    <address>
     +91 9582860464<br/>
      <a className={styles.footer__btn} href="mailto:sd2140@srmist.edu.in">Email Me</a>
    </address>
  </div>
  
  <ul className={styles.footer__nav}>
    <li className={styles.nav__item}>
      <h2 className={styles.nav__title}>Projects</h2>

      <ul className={styles.nav__ul}>
        <li>
          <a href="#">Portfolio</a>
        </li>

        <li>
          <a href="#">Research</a>
        </li>
            
        <li>
          <a href="#">Open-Source</a>
        </li>
      </ul>
    </li>
    
    <li className={styles.nav__item}>
      <h2 className={styles.nav__title}>Skills</h2>
      
      <ul className={styles.nav__ul} >
        <li>
          <a href="#">Frontend</a>
        </li>
        
        <li>
          <a href="#">Backend</a>
        </li>
        
        <li>
          <a href="#">Designing</a>
        </li>
        
      </ul>
    </li>
    
    <li className={styles.nav__item}>
      <h2 className={styles.nav__title}>Connect</h2>
      
      <ul className={styles.nav__ul}>
        <li>
          <a href="https://www.linkedin.com/in/samarth-dhawan-a317821aa/">Linkedin</a>
        </li>
        
        <li>
          <a href="https://github.com/samarth2812">Github</a>
        </li>
        
        <li>
          <a href="#">Discord</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className={styles.legal}>
    <p>&copy; 2023 Samarth Dhawan's Talent Showcase.</p>
    

  </div>
</footer>
    </>
  )
}

export default Footer
