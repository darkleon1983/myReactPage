import React, { useState } from 'react';
import styles from './Header.module.css';


const OpenButton = () => {
    return (
        <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33" height="3.83721" fill="black" />
            <rect y="7.67383" width="33" height="3.83721" fill="black" />
            <rect y="15.3496" width="33" height="3.83721" fill="black" />
        </svg>
    );
}
const CloseButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="50px" height="50px" viewBox="-1 -1 11 11" version="1.1">
        <path fill="#5f6368" stroke="#5f6368" stroke-linecap="round" stroke-width="1.5"
        d="m0 0 9,9 M0 9 9,0" />
        </svg>
    );
}

const MenuButton = (props) => {
    console.log(props.isActive);
    if (props.isActive) {
        return (
            <CloseButton />
        );
    } else {
        return (
            <OpenButton />
        );
    }
}


const Header = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className={styles.header}>
            <div className={`${styles.listContainer} ${isActive ? null : styles.invisible}`}>
                <ul classList={styles.list}>
                    <li>
                        <a className={styles.listItem} href='#home'>Home</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#about_me'>About me</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#contacts'>Contacts</a>
                    </li>
                </ul>
            </div>
            <div className={styles.description}>
                <div className={styles.text}>
                    <div className={styles.name}>Evgeny <br /> Korolev</div>
                    <div className={styles.info}>
                        <div>Frontend developer,<br /> 38 years, Krasnoyarsk</div>
                    </div>
                    <div className={styles.lang}>Ru|Eng</div>
                    <div className={styles.mobileButton} onClick={toggleClass}>
                        <MenuButton isActive={isActive} />
                    </div>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Header;