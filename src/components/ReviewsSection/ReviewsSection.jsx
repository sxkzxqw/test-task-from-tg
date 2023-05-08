import React from 'react';
import styles from './ReviewsSection.module.css';
import phone from '../../images/sectionImages/phone.png';

const ReviewsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>What our clients say about our awesome solutions</h2>
                <div className={styles.text_container}>
                    <p className={styles.text}>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                    <p className={styles.text}>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
            </div>
            <img src={phone} alt='phone image' className={styles.phone} />
        </section>
    );
};

export default ReviewsSection;