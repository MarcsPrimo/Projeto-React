import React from 'react';
import Paises from './Paises';

function Main(){

    const listaPaises = [
        {id: 1, nome:'Brasil', continente: 'America do Sul'}, {id: 2, nome:'Argentina', continente: 'America do Sul'},
        {id: 3, nome:'Japão', continente: 'Asia'}, {id: 4, nome:'Arabia Saudita', continente: 'Asia'},
        {id: 5, nome:'México', continente: 'America do Norte'}, {id: 6, nome:'Estados Unidos da America', continente: 'America do Norte'},
        {id: 7, nome:'Angola', continente: 'Africa'}, {id: 8, nome:'Madagascar', continente: 'Africa'},
        {id: 9, nome:'Australia', continente: 'Oceania'}, {id: 10, nome:'Nova Zelandia', continente: 'Oceania'},
    ];
    return(
        <>
            {listaPaises.map((pais) => {
                return <Paises nome_pais = {pais.nome} continente_pais = {pais.continente} />
            })}
        </>

    );
}

export default Main;