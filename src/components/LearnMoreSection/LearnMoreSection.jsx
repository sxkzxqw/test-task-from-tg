import React from 'react';
import styles from './LearnMoreSection.module.css';
import brain from '../../images/sectionImages/brain.png'

const LearnMoreSection = () => {
    return (
        <section className={styles.section}>
            <img src={brain} alt='brain image' />
            <div className={styles.container}>
                <h2 className={styles.title}>Apply AI, Deep Learning and Data Sciece to solve</h2>
                <p className={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className={styles.button}>Learn More</button>
            </div>
        </section>
    );
};

export default LearnMoreSection;