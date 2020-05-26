import React from 'react';
import './Main.css'

function Filmes(props){

    return(
        <>
            <h3>{props.nome_filme}</h3>
            <h4> Ano - {props.continente_filme}</h4>
            <div align="center">{props.gif_filme}</div>
            <h4>TRAILER</h4>
            <div align="center">{props.trailer_filme}</div>
            <br/>
            <hr/>
        </>
    ); 
}

export default Filmes;