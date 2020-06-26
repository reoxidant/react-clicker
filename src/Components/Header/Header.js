import React from 'react';
import img_click from './click.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="clicker-header">
            <img src={img_click} alt="icon"/>
            <h5>React Clicker</h5>
        </div>
    );
}

export default Header;