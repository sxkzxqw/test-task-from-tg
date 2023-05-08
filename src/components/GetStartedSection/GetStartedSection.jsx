import React from 'react';
import styles from './GetStartedSection.module.css';
import human from '../../images/sectionImages/human.png';
import first from '../../images/logos/first.svg';
import second from '../../images/logos/second.svg';
import third from '../../images/logos/third.svg';
import four from '../../images/logos/fourth.svg';
import { IoPlay } from 'react-icons/io5'

const GetStartedSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.text_wrapper}>
                    <h2 className={styles.subtitle}>Next genaretion platform</h2>
                    <h1 className={styles.title}>Artificial intelligence & Syber security</h1>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className={styles.buttons}>
                        <button className={styles.button} type='button'>
                            Get Started
                        </button>
                        <button className={styles.button} type='button'>
                            <IoPlay />
                            Watch Video
                        </button>
                    </div>
                </div>
                <img src={human} alt='human image' className={styles.human} />
            </div>
            <div className={styles.logos}>
                <img src={first} alt='Logoipsum' />
                <img src={second} alt='Logoipsum' />
                <img src={third} alt='Logoipsum' />
                <img src={four} alt='Logoipsum' />
            </div>
        </section>
    );
};

export default GetStartedSection;