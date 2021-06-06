import React, { useState } from 'react';
import Sun from 'D:/Projects/app_dev/React Framework/dictator/src/assets/sun.png';
import Moon from 'D:/Projects/app_dev/React Framework/dictator/src/assets/moon.png';
import './Header.css'


const Header = ({ handleTheme }) => {

    let [themeIcon, setThemeIcon] = useState(Sun);

    const handleIcon = (icon) => {
        if(icon === Sun)
            icon = Moon;
        else if (icon === Moon)
            icon = Sun;

        setThemeIcon(icon);
    }

    return <div className="header-wrapper">
        <h1 className="app-name">Dictator</h1>
        <img 
            className="theme-icon" 
            src={themeIcon} 
            alt="Light"
            onClick={() => {
                handleIcon(themeIcon)
                handleTheme((prevMode) => !prevMode)}
            }>
        </img>
    </div>
}

export default Header;