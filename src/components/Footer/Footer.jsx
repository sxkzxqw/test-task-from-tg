import React from 'react';
import styles from './Footer.module.css';
import facebook from '../../images/footerImages/logos/facebook.svg';
import instagram from '../../images/footerImages/logos/instagram.svg';
import tweeter from '../../images/footerImages/logos/tweeter.svg';
import linkedin from '../../images/footerImages/logos/linked.svg';
import youtube from '../../images/footerImages/logos/tube.svg';
import mail from '../../images/footerImages/mail.svg';
import phone from '../../images/footerImages/phone.svg';
import location from '../../images/footerImages/location.svg';
import logo from '../../images/robot.svg'
import earth from '../../images/footerImages/logos/global.svg';
import { IoIosArrowDown } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div className={styles.contact_container}>
                    <img src={logo} alt='logo' className={styles.logo} />
                    <p className={styles.logo_text}>Artificial Intelligence</p>
                    <p className={styles.contact_text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                </div>
                <ul className={styles.contact_links}>
                    <li className={styles.contact_link}>
                        <img src={mail} alt='mail' />
                        <p className={styles.contact_link_text}>Company@gmail.com.com</p>
                    </li>
                    <li className={styles.contact_link}>
                        <img src={phone} alt='phone' />
                        <p className={styles.contact_link_text}>{`Phone: (064) 332-1233`}</p>
                    </li>
                    <li className={styles.contact_link}>
                        <img src={location} alt='location' />
                        <p className={styles.contact_link_text}>450 Wall Street, USA, New York</p>
                    </li>
                </ul>
            </div>
            <div className={styles.link_container}>
                <p className={styles.link_title}>information</p>
                <ul className={styles.links}>
                    <li><a href='#' className={styles.link}>New Collection</a></li>
                    <li><a href='#' className={styles.link}>About Store</a></li>
                    <li><a href='#' className={styles.link}>Contact Us</a></li>
                    <li><a href='#' className={styles.link}>Latest News</a></li>
                    <li><a href='#' className={styles.link}>Our Sitemap</a></li>
                    <li><a href='#' className={styles.link}>Orders History</a></li>
                </ul>
            </div>
            <div className={styles.link_container}>
                <p className={styles.link_title}>footer menu</p>
                <ul className={styles.links}>
                    <li><a href='#' className={styles.link}>Instagram profile</a></li>
                    <li><a href='#' className={styles.link}>New Collection</a></li>
                    <li><a href='#' className={styles.link}>Contact Us</a></li>
                    <li><a href='#' className={styles.link}>Latest News</a></li>
                    <li><a href='#' className={styles.link}>Terms & Conditions</a></li>
                    <li><a href='#' className={styles.link}>Purchase Theme</a></li>
                </ul>
            </div>
            <div className={styles.link_container}>
                <p className={styles.link_title}>useful links</p>
                <ul className={styles.links}>
                    <li><a href='#' className={styles.link}>Instagram profile</a></li>
                    <li><a href='#' className={styles.link}>New Collection</a></li>
                    <li><a href='#' className={styles.link}>Contact Us</a></li>
                    <li><a href='#' className={styles.link}>Latest News</a></li>
                    <li><a href='#' className={styles.link}>Terms & Conditions</a></li>
                    <li><a href='#' className={styles.link}>Purchase Theme</a></li>
                </ul>
            </div>
            <div className={styles.about}>
                <div className={styles.about_container}>
                    <p className={styles.link_title} style={{ marginBottom: '32px' }}>about the store</p>
                    <p className={styles.lorem_text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                    <a className={styles.company_link} href='#'>www.company.com</a>
                    <div className={styles.logos}>
                        <a className={styles.logo_link} href='#'>
                            <img src={facebook} alt='facebook' />
                        </a>
                        <a className={styles.logo_link} href='#'>
                            <img src={instagram} alt='instagram' />
                        </a>
                        <a className={styles.logo_link} href='#'>
                            <img src={tweeter} alt='tweeter' />
                        </a>
                        <a className={styles.logo_link} href='#'>
                            <img src={linkedin} alt='linkedin' />
                        </a>
                        <a className={styles.logo_link} href='#'>
                            <img src={youtube} alt='youtube' />
                        </a>
                    </div>
                </div>
                <div className={styles.select}>
                    {/* временное решение т к нет вариантов из чего выбирать */}
                    <img src={earth} alt='earth' className={styles.earth} />
                    <p className={styles.select_text}>English</p>
                    <IoIosArrowDown className={styles.arrow} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;