import React from 'react';
import './Header.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Header(){

    return(

        <>
            <BrowserRouter>
                <header>
                    <nav>
                        <ul>
                            <li>África</li>
                            <li>América do Norte</li>
                            <li>América do Sul</li>
                            <li>Antártica</li>
                            <li>Ásia</li>
                            <li>Oceania</li>
                            <li>Europa</li>
                        </ul>
                    </nav>
                </header>
            </BrowserRouter>
        </>

    );
}

export default Header;