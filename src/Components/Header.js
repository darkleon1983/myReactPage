import React from 'react';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className="header">
        
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
    );
}

export default Header;