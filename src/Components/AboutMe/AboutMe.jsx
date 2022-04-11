import React from "react";
import styles from './AboutMe.module.css';



const AboutMe = () => {
    return (
        <div className={styles.about}>
                <h2 className={styles.heading}>About me</h2>
            <div className={styles.item}>
            </div>
            <div className={styles.item}>
                <p>Hi, I'm Evgeny – Frontend developer from Krasnoyarsk. I'm interested in new projects.</p>
            </div>
            <div className={styles.item}>
                <p>I graduated a course in "HTML-Academy". </p>
            </div>
            <div className={styles.item}>
                <p>Ready to implement excellent projects with wonderful people.</p>
            </div>
        </div>
    );
}

export default AboutMe;