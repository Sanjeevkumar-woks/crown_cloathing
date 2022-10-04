import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';

const Header=()=>(
<div className="header">

<Link  className="logo-container" to='/'>
    <img alt="logo" className="logo" src="https://www.svgrepo.com/show/30829/crown.svg"/>
</Link>
<div className="options">
    <Link className="option" to='/shop'>SHOP</Link>
    <Link className="option" to='/contact'>CONTACT</Link>
    <Link className="option" to='/signin'>SIGN IN</Link>
</div>
</div>
);

export default Header;