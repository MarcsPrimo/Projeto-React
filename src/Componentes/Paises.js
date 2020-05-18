import React from 'react';
import './Main.css'

function Paises(props){

    return(
        <>
            <h3>Pais: {props.nome_pais}</h3>
            <h4> Continente: {props.continente_pais}</h4>
            <h4> Comida: {props.comida_pais}</h4>
            {props.img_pais}
            <br/>
        </>
    ); 
}


export default Paises;