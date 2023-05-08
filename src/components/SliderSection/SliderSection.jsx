import React from 'react';
import styles from './SliderSection.module.css';
import first from '../../images/cartImages/first.svg';
import second from '../../images/cartImages/sec.svg';
import third from '../../images/cartImages/third.svg';
import four from '../../images/cartImages/four.svg';
import five from '../../images/cartImages/five.svg';

const SliderSection = () => {
    return (
        <section className={styles.section}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} alt='cart image' src={first} style={{ maxWidth: '73px', maxHeight: '69px' }} />
                    <p className={styles.title}>Naxly as the Winners in Global Agency Awards</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} alt='cart image' src={second} />
                    <p className={styles.title}>Expert Prespective Agency Awards</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} alt='cart image' src={third} />
                    <p className={styles.title}>Business Prespective Global Agency Awards</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} alt='cart image' src={four} />
                    <p className={styles.title}>Value for Results in Global Agency Awards</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} alt='cart image' src={five} />
                    <p className={styles.title}>Global Experience in Agency Awards</p>
                    <p className={styles.text}>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
            </ul>
            <div className={styles.slider}>
                <div className={styles.slider_item}></div>
                <div className={`${styles.slider_item} ${styles.slider_item_type_active}`}></div>
                <div className={styles.slider_item}></div>
            </div>
        </section>
    );
};

export default SliderSection;