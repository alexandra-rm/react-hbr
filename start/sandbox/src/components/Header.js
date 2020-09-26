import React from 'react';
import './Header.css';

const Header = ({text = 'Hello world!'}) => <header className="navbar">{text}</header>;

export default Header;
