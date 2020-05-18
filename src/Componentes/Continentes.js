import React from 'react';
import Paises from './Paises';
import Angola from '../imagens/comidaAngola.jpg'
import Japao from '../imagens/comidaJapao.jpg'
import Arabia from '../imagens/comidaArabia.jpg'
import Australia from '../imagens/comidaAustralia.jpg'
import NovaZelandia from '../imagens/comidaNovaZelandia.jpg'
import Franca from '../imagens/comidaFranca.jpg'
import Portugal from '../imagens/comidaPortugal.jpg'



function Continentes(props){

    const listaPaises = [
        {id: 1, nome:'Brasil', continente: 'America do Sul'}, {id: 2, nome:'Argentina', continente: 'America do Sul'},
        {id: 3, nome:'Japão', continente: 'Asia', txt: 'Sashimi - Prato típico da culinária Japonesa', imagem: <img src={Japao}/>}, {id: 4, nome:'Arabia Saudita', continente: 'Asia', txt: 'Babaganuche - Prato típico da culinária Árabe', imagem: <img src={Arabia}/>},
        {id: 5, nome:'México', continente: 'America do Norte'}, {id: 6, nome:'Estados Unidos da America', continente: 'America do Norte'},
        {id: 7, nome:'Angola', continente: 'Africa', txt: 'Mufete de Peixe - Prato principal típico da Angola', imagem: <img src={Angola} />}, {id: 8, nome:'Madagascar', continente: 'Africa'},
        {id: 9, nome:'Australia', continente: 'Oceania', txt: 'Costela suina com molho barbecue - Prato típico da culinária Australiana', imagem: <img src={Australia}/>}, {id: 10, nome:'Nova Zelandia', continente: 'Oceania',txt: 'Cordeiro de Canterbury - Prato típico da culinária Neozelandesa', imagem: <img src={NovaZelandia}/>},
        {id: 11, nome:'França', continente: 'Europa',txt: 'Ratatouille - Prato típico da culinária Francesa', imagem: <img src={Franca}/>}, {id: 12, nome:'Portugal', continente: 'Europa',txt: 'Bolinho de bacalhau - Prato típico da culinária Portuguesa', imagem: <img src={Portugal}/>},
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