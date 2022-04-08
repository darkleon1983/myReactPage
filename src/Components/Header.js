import React from 'react';
import '../Styles/Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className='listContainer'>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About me</a>
                    </li>
                    <li>
                        <a href='#'>Skills</a>
                    </li>
                    <li>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#'>Contacts</a>
                    </li>
                </ul>
            </div>
            <div className='description'>
                <div className='description-text'>
                    <div className='description-text_name'>Evgeny <br /> Korolev</div>
                    <div className='description-text_info'>Frontend developer,<br /> 38 years, Krasnoyarsk</div>
                    <div className='description-text_lang'>Ru|Eng</div>
                    <div className='mobileButton'>
                        <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="33" height="3.83721" fill="black" />
                            <rect y="7.67383" width="33" height="3.83721" fill="black" />
                            <rect y="15.3496" width="33" height="3.83721" fill="black" />
                        </svg>

                    </div>
                </div>
                <div className='description-photo'></div>
            </div>
        </div>
    );
}



export default Header;