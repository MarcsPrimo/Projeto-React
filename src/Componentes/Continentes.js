import React from 'react';
import Paises from './Paises';
import Angola from '../imagens/comidaAngola.jpg'
import Japao from '../imagens/comidaJapao.jpg'
import Arabia from '../imagens/comidaArabia.jpg'
import Australia from '../imagens/comidaAustralia.jpg'
import NovaZelandia from '../imagens/comidaNovaZelandia.jpg'
import Franca from '../imagens/comidaFranca.jpg'
import Portugal from '../imagens/comidaPortugal.jpg'
import Madagascar from '../imagens/comidaMadagascar.jpg'
import Mexico from '../imagens/comidaMexico.jpg'
import EUA from '../imagens/comidaEUA.jpg'
import Brasil from '../imagens/comidaBrasil.jpg'
import Argentina from '../imagens/comidaArgentina.jpg'

function Continentes(props){

    const listaPaises = [
        {id: 1, nome:'Brasil', continente: 'America do Sul', txt: 'Feijoada - Prato típico da culinária Brasileira', imagem: <img src={Brasil} className="imagens" />}, {id: 2, nome:'Argentina', continente: 'America do Sul', txt: 'Empanadas - Prato típico da culinária Argentina', imagem: <img src={Argentina} className="imagens" />},
        {id: 3, nome:'Japão', continente: 'Asia', txt: 'Sashimi - Prato típico da culinária Japonesa', imagem: <img src={Japao} className="imagens" />}, {id: 4, nome:'Arabia Saudita', continente: 'Asia', txt: 'Babaganuche - Prato típico da culinária Árabe', imagem: <img src={Arabia} className="imagens"/>},
        {id: 5, nome:'México', continente: 'America do Norte', txt: 'Guacamole - Prato típico da culinária Mexicana', imagem: <img src={Mexico} className="imagens"/> }, {id: 6, nome:'Estados Unidos da America', continente: 'America do Norte', txt: "Mac n’ Cheese - Prato típico da culinária Norte Americana", imagem: <img src={EUA} className="imagens" />},
        {id: 7, nome:'Angola', continente: 'Africa', txt: 'Mufete de Peixe - Prato típico da culinária Angolana', imagem: <img src={Angola} className="imagens"/>}, {id: 8, nome:'Madagascar', continente: 'Africa', txt: 'Ravitoto - Prato típico da culinária de Madagascar', imagem: <img src={Madagascar} className="imagens"/>},
        {id: 9, nome:'Australia', continente: 'Oceania', txt: 'Costela suina com molho barbecue - Prato típico da culinária Australiana', imagem: <img src={Australia} className="imagens" />}, {id: 10, nome:'Nova Zelandia', continente: 'Oceania',txt: 'Cordeiro de Canterbury - Prato típico da culinária Neozelandesa', imagem: <img src={NovaZelandia} className="imagens"/>},
        {id: 11, nome:'França', continente: 'Europa',txt: 'Ratatouille - Prato típico da culinária Francesa', imagem: <img src={Franca} className="imagens"/>}, {id: 12, nome:'Portugal', continente: 'Europa',txt: 'Bolinho de bacalhau - Prato típico da culinária Portuguesa', imagem: <img src={Portugal} className="imagens" />},
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