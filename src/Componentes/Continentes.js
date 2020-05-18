import React from 'react';
import Paises from './Paises';
import Angola from '../imagens/comidaAngola.jpg'


function Continentes(props){

    const listaPaises = [
        {id: 1, nome:'Brasil', continente: 'America do Sul'}, {id: 2, nome:'Argentina', continente: 'America do Sul'},
        {id: 3, nome:'Japão', continente: 'Asia'}, {id: 4, nome:'Arabia Saudita', continente: 'Asia'},
        {id: 5, nome:'México', continente: 'America do Norte'}, {id: 6, nome:'Estados Unidos da America', continente: 'America do Norte'},
        {id: 7, nome:'Angola', continente: 'Africa', txt: 'Mufete de Peixe - Prato principal típico da Angola', imagem: <img src={Angola} />}, {id: 8, nome:'Madagascar', continente: 'Africa'},
        {id: 9, nome:'Australia', continente: 'Oceania'}, {id: 10, nome:'Nova Zelandia', continente: 'Oceania'},
        {id: 11, nome:'França', continente: 'Europa'}, {id: 12, nome:'Portugal', continente: 'Europa'},
    ];
    return(
        <>
            {listaPaises.map((pais) => {
                if(props.continente != null){
                    if(pais.continente == props.continente){
                        return <Paises nome_pais = {pais.nome} continente_pais = {pais.continente} comida_pais = {pais.txt} img_pais = {pais.imagem} />
                    }
                }
                else{
                    return <Paises nome_pais = {pais.nome} continente_pais = {pais.continente} comida_pais = {pais.txt} img_pais = {pais.imagem}/>
                }
            })}
        </>

    );
}

export default Continentes;