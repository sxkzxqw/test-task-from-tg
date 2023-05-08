import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/robot.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <img src={logo} alt='logo' />
                    <p className={styles.logo_title}>Artificial Intelligence</p>
                </div>
                <nav className={styles.nav}>
                    <a className={styles.link}>Home</a>
                    <a className={styles.link}>About</a>
                    <a className={styles.link}>Services</a>
                    <a className={styles.link}>Blog</a>
                    <a className={styles.link}>Contact</a>
                </nav>
                <button className={styles.button} type='button'>Sign In</button>
            </div>
        </header>
    );
};

export default Header;