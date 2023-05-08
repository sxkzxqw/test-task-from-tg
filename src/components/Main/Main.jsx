import React from 'react';
import styles from './Main.module.css'
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import LearnMoreSection from '../LearnMoreSection/LearnMoreSection';
import SliderSection from '../SliderSection/SliderSection';
import ReviewsSection from '../ReviewsSection/ReviewsSection';

const Main = () => {
    return (
        <main className={styles.main}>
            <GetStartedSection />
            <LearnMoreSection />
            <SliderSection />
            <ReviewsSection />
        </main>
    );
};

export default Main;