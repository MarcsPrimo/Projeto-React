import React, {useState} from 'react';
import './Header.css'
import './Main.css'
import Logo from '../imagens/logo2.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Animacoes from './Animacoes';
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
                                <Link to = "/1986">1986</Link>
                            </li>
                            <li>
                                <Link to = "/1988">1988</Link>
                            </li>
                            <li>
                                <Link to = "/1991">1991</Link>
                            </li>
                            <li>
                                <Link to = "/1992">1992</Link>
                            </li>
                            <li>
                                <Link to = "/1993">1993</Link>
                            </li>
                            <li>
                                <Link to = "/1994">1994</Link>
                            </li>
                            <li>
                                <Link to = "/1995">1995</Link>
                            </li>
                            <li>
                                <Link to = "/1997">1997</Link>
                            </li>
                            <li>
                                <Link to = "/1999">1999</Link>
                            </li>
                            <li>
                                <Link to = "/2001">2001</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Main} />
                <Route exact path="/1986/" component={() => <Animacoes animacao = '1986' />} />
                <Route exact path="/1988/" component={() => <Animacoes animacao = '1988' />} />
                <Route exact path="/1991/" component={() => <Animacoes animacao = '1991' />} />
                <Route exact path="/1992/" component={() => <Animacoes animacao = '1992' />} />
                <Route exact path="/1993/" component={() => <Animacoes animacao = '1993' />} />
                <Route exact path="/1994/" component={() => <Animacoes animacao = '1994' />} />
                <Route exact path="/1995/" component={() => <Animacoes animacao = '1995' />} />
                <Route exact path="/1997/" component={() => <Animacoes animacao = '1997' />} />
                <Route exact path="/1999/" component={() => <Animacoes animacao = '1999' />} />
                <Route exact path="/2001/" component={() => <Animacoes animacao = '2001' />} />
            </BrowserRouter>
        </>

    );
}

export default Header;