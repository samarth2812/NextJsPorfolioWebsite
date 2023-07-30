import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className={styles.mainnav}>
            <ul className={styles.hello}>
                 <Link className={styles.u} legacyBehavior href='/'><a className={styles.fer}><li>Home</li></a></Link>
                 <Link className={styles.u} legacyBehavior href='/'><a className={styles.fer}><li>About</li></a></Link> 
                <Link className={styles.u} legacyBehavior href='/Project'><a className={styles.fer}><li>Projects</li></a></Link>
                <Link className={styles.u} legacyBehavior href='/contact'><a className={styles.fer}><li>Contact</li></a></Link> 
            </ul>
        </nav> 
      
    </div>
  )
}

export default Navbar
