import React from 'react';
import styles from './Header.module.css';


const Header = () => {
    const handlerClick = (event) => {
       alert('hey');
    }

    return (
        <div className={styles.header}>
            <div className={`${styles.listContainer} ${styles.invisible}`}>
                <ul classList={styles.list}>
                    <li>
                        <a className={styles.listItem} href='#'>Home</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#'>About me</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#'>Skills</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#'>Portfolio</a>
                    </li>
                    <li>
                        <a className={styles.listItem} href='#'>Contacts</a>
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
                    <div className={styles.mobileButton}>
                        <svg onClick={handlerClick} width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="33" height="3.83721" fill="black" />
                            <rect y="7.67383" width="33" height="3.83721" fill="black" />
                            <rect y="15.3496" width="33" height="3.83721" fill="black" />
                        </svg>

                    </div>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

console.log(styles);

export default Header;