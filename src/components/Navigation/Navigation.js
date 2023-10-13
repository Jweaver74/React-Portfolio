import React from "react";
import "./Navigation.css";


function Navigation({ currentPage, setCurrentPage, handleCloseNacNow }) {
    return (
        <ul
            className='nav nav-tabs'
            style={{paddingRight: '35px', paddingTop: '40px'}}
            >
                <li className='nav-item'>
                    <a
                    id="nav-link"
                    href="#About"
                    onClick={() => setCurrentPage("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}
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
