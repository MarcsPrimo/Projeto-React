import React from 'react';

function Paises(props){
    
    return(
        <>
            <h3>Pais: {props.nome_pais}</h3>
            <h4> Continente: {props.continente_pais}</h4>
            <br/>
        </>
    ); 
}


export default Paises;