import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PortfolioContainer from './PortfolioContainer';
import { useState } from 'react';

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');
    return (
        <div>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PortfolioContainer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
            <Footer />
        </div>
    );
};

export default App;