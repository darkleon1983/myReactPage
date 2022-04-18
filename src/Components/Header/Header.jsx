import React, { useState } from 'react';
import styles from './Header.module.css';


function OpenButton  () {
    return (
        <svg  width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="33" height="3.83721" fill="black" />
        <rect y="7.67383" width="33" height="3.83721" fill="black" />
        <rect y="15.3496" width="33" height="3.83721" fill="black" />
    </svg>
    );
}
function CloseButton () {
    return (
        <svg  width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="33" height="3.83721" fill="red" />
        <rect y="7.67383" width="33" height="3.83721" fill="red" />
        <rect y="15.3496" width="33" height="3.83721" fill="red" />
    </svg>
    );
}

function MenuButton (props) {
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
            <div className={`${styles.listContainer} ${isActive ? null: styles.invisible}`}>
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
                    <div className={styles.mobileButton} onClick={toggleClass}>
                        <MenuButton isActive={isActive}/>
                    </div>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Header;