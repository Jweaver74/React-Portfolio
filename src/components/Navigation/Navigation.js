import React from 'react';
import './Navigation.css';


const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

function Navigation({ currentPage, setCurrentPage }) {
    return (
        <ul
            className='nav nav-tabs'
            style={{paddingRight: '35px', paddingTop: '40px'}}
            >
                <li className='nav-item'>
                    <a
                    id='nav-link'
                    href='#About'
                    onClick={() => setCurrentPage('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    id='nav-link'
                    href='#Portfolio'
                    onClick={() => setCurrentPage('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    id='nav-link'
                    href='#Contact'
                    onClick={() => setCurrentPage('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    id='nav-link'
                    href='#Resume'
                    onClick={() => setCurrentPage('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
        </ul>
    );
}

export default Navigation;
