import React from 'react';
import styles from './Main.module.css'
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import LearnMoreSection from '../LearnMoreSection/LearnMoreSection';
import SliderSection from '../SliderSection/SliderSection';

const Main = () => {
    return (
        <main className={styles.main}>
            <GetStartedSection />
            <LearnMoreSection />
            <SliderSection />
        </main>
    );
};

export default Main;