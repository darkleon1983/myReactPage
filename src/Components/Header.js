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
                    <div className='description-text_name'>Evgeny <br/> Korolev</div>
                    <div className='description-text_info'>Frontend developer,<br/> 38 years, Krasnoyarsk</div>
                    <div className='description-text_lang'>Ru|Eng</div>
                </div>
                <div className='description-photo'>
                {/* <img src="./profilePhoto.png" alt="Hello, world" /> */}
                </div>
            </div>
        </div>
    );
}



export default Header;