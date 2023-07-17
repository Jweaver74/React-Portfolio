import React from "react";
import "./Header.css";

// function Header(props) {
    export default function Header ({currentPage, setCurrentPage}) {
        return (
            <div className='headerParent' style={{padding: '0px 0px 10px 43px'}}>
            <p id='header-text'>Jason Weaver</p>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}