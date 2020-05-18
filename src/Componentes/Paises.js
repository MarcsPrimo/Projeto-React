import React from 'react';
import './Main.css'

function Paises(props){

    return(
        <>
            <h3>País - {props.nome_pais}</h3>
            <h4> Continente - {props.continente_pais}</h4>
            <h4> Comida Típica</h4>
            <h4> {props.comida_pais}</h4>
            <p>{props.img_pais}</p>
            <br/>
        </>
    ); 
}

export default Paises;