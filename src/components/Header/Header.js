import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-info'>
           <span>Knowledge Valley</span>
           <div className='nav-link'>
           <a href="/Programming">Programming</a>
           <a href="/inventory">Inventory</a>
           <a href="/contact">Contact</a>
           <a href="/login">Login</a>
           </div>
        </nav>
    );
};

export default Header;