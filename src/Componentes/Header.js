import React, {useState} from 'react';
import './Header.css'
import Logo from '../imagens/logo1.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Continentes from './Continentes';

function Header(){

    const [americaSul, setAmericaSul] = useState(false);
    const [americaNorte, setAmericaNorte] = useState(false);
    const [europa, setEuropa] = useState(false);
    const [asia, setAsia] = useState(false);
    const [africa, setAfrica] = useState(false);
    const [oceania, setOceania] = useState(false);

    return(

        <>
            <BrowserRouter>
                <header>
                <img src={Logo} alt="Logo" className="logo"/>
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
                <main>
                    <div>
                    <Route exact path="/Africa" component={() => <Continentes continente = 'Africa' />} />
                    <Route exact path="/AmericaSul" component={() => <Continentes continente = 'America do Sul' />} />
                    <Route exact path="/AmericaNorte" component={() => <Continentes continente = 'America do Norte' />} />
                    <Route exact path="/Asia" component={() => <Continentes continente = 'Asia' />} />
                    <Route exact path="/Oceania" component={() => <Continentes continente = 'Oceania' />} />
                    <Route exact path="/Europa" component={() => <Continentes continente = 'Europa' />} />

                    </div>
                </main>
            </BrowserRouter>
        </>

    );
}

export default Header;