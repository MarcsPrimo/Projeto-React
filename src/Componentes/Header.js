import React, {useState} from 'react';
import './Header.css'
import './Main.css'
import Logo from '../imagens/logo1.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Continentes from './Continentes';
import Main from './Main';

function Header(){

    return(

        <>
            <BrowserRouter>
                <header>
                <Link to="/">
                <img src={Logo} alt="Logo" className="logo"/>
                </Link> 
                    <nav>
                        <ul>
                            <li>
                                <Link to = "/Africa">
                                    África
                                </Link>
                            </li>
                            <li>
                                <Link to = "/AmericaNorte">
                                    América do Norte
                                </Link>
                            </li>
                            <li>
                                <Link to = "/AmericaSul">
                                    América do Sul
                                </Link>
                            </li>
                            <li>
                                <Link to = "/Asia">
                                    Ásia
                                </Link>
                            </li>
                            <li>
                                <Link to = "/Oceania">
                                    Oceania
                                </Link>
                            </li>
                            <li>
                                <Link to = "/Europa">
                                    Europa
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Main} />
                <Route exact path="/Africa/" component={() => <Continentes continente = 'Africa' />} />
                <Route exact path="/AmericaSul/" component={() => <Continentes continente = 'America do Sul' />} />
                <Route exact path="/AmericaNorte/" component={() => <Continentes continente = 'America do Norte' />} />
                <Route exact path="/Asia/" component={() => <Continentes continente = 'Asia' />} />
                <Route exact path="/Oceania/" component={() => <Continentes continente = 'Oceania' />} />
                <Route exact path="/Europa/" component={() => <Continentes continente = 'Europa' />} />
            </BrowserRouter>
        </>

    );
}

export default Header;