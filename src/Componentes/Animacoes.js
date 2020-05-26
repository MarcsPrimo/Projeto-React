import React from 'react';
import Filmes from './Filmes';
import Totoro from '../imagens/totoro.gif'
import Animado from '../imagens/casteloAnimado.gif'
import Chihiro from '../imagens/chihiro.gif'
import Vagalumes from '../imagens/tumuloVagalumes.gif'
import Memorias from '../imagens/memorias.gif'
import PorcoRosso from '../imagens/porcorosso.gif'
import OceanWaves from '../imagens/OceanWaves.gif'
import PomPoko from '../imagens/pompoko.gif'
import Sussurros from '../imagens/sussurros.gif'
import Mononoke from '../imagens/mononoke.gif'
import Yamadas from '../imagens/yamadas.gif'

function Animacoes(props){

    const listaFilmes = [
        {id: 1, nome:'O Castelo no Céu', animacao: '1986', imagem: <img src={Animado} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/8ykEy-yPBFc" allow="accelerometer;" />}, 
        {id: 2, nome:'Túmulo dos Vagalumes', animacao: '1988', imagem: <img src={Vagalumes} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/4vPeTSRd580" allow="accelerometer;" />}, {id: 3, nome:'Meu Amigo Totoro', animacao: '1988', imagem: <img src={Totoro} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/92a7Hj0ijLs" allow="accelerometer;" />}, 
        {id: 4, nome:'Memórias de Ontem', animacao: '1991', imagem: <img src={Memorias} className='imagens'/>, trailer:<iframe className='imagens' src="https://www.youtube.com/embed/OfkQlZArxw0" allow="accelerometer;" />},
        {id: 5, nome:'Porco Rosso', animacao: '1992', imagem: <img src={PorcoRosso} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/awEC-aLDzjs" allow="accelerometer;" /> }, 
        {id: 6, nome:'Eu Posso Ouvir o Oceano', animacao: '1993', imagem: <img src={OceanWaves} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/tfkHiHjrqa8" allow="accelerometer;" />},
        {id: 7, nome:'PomPoko - A Grande Batalha dos Guaxinins', animacao: '1994', imagem: <img src={PomPoko} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/_7cowIHjCD4" allow="accelerometer;" />}, 
        {id: 8, nome:'Sussurros do Coração', animacao: '1995', imagem: <img src={Sussurros} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/0pVkiod6V0U" allow="accelerometer;" />}, 
        {id: 9, nome:'Princesa Mononoke', animacao: '1997', imagem: <img src={Mononoke} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/4OiMOHRDs14" allow="accelerometer;" />}, 
        {id: 10, nome:'Meus Vizinhos, Os Yamadas', animacao: '1999', imagem: <img src={Yamadas} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/1C9ujuCPlnY" allow="accelerometer;" />},
        {id: 11, nome:'A Viagem de Chihiro', animacao: '2001', imagem: <img src={Chihiro} className='imagens'/>, trailer: <iframe className='imagens' src="https://www.youtube.com/embed/qCgon52mp2M" allow="accelerometer;" />}
    ];
    return(
        <>
            {listaFilmes.map((animacao) => {
                if(props.animacao != null){
                    if(animacao.animacao == props.animacao){
                        return <Filmes nome_filme = {animacao.nome} continente_filme = {animacao.animacao} gif_filme = {animacao.imagem} trailer_filme = {animacao.trailer} />
                    }
                }
                else{
                    return <Filmes nome_filme = {animacao.nome} continente_filme = {animacao.animacao} gif_filme = {animacao.imagem}/>
                }
            })}
        </>

    );
}

export default Animacoes;