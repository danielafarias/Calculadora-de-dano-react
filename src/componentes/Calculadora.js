import React from 'react';
import orc from './img/orc.png';
import goblin from './img/goblin.png';
import feiticeira from './img/feiticeira.png';
import arco from './img/arco.png';
import soco from './img/soco.png';
import espada from './img/espada.png';
import Personagem from './Personagem';
import Arma from './Arma';

class Calculadora extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resposta: ""
   }
}

  calcularDano = (e) => {
    let poderAtaque = Math.floor(Math.random() * 100);
    let poderDefesa;

    if (Personagem === 'orc') {
      poderDefesa = 80;
    }

    else if (Personagem === 'goblin') {
      poderDefesa = 30;
    }

    else {
      poderDefesa = 50;
    }

    if (poderAtaque > poderDefesa) {
      this.setState({resposta: `Dado: ${poderAtaque}; Parabéns, você conseguiu derrota-lo!`})
      }

    else {
      this.setState({resposta: `Dado: ${poderAtaque}; Uma pena, não foi dessa vez, tente novamente.`})
    }
  }

    render () {
      return (
      <div id="bloco1">
  
            <div id="bloco2">
                <h2>Calculadora de Dano</h2>
            </div>
  
            <div id="bloco3">
                <h3>Selecione um personagem</h3>
            </div>
            <div id="bloco4">
            <Personagem nome="orc" imagem={orc}/>
            <Personagem nome="goblin" imagem={goblin}/>
            <Personagem nome="feiticeira" imagem={feiticeira}/>
            </div>
            
            <div id="bloco5">
                <h3>Selecione uma arma</h3>
            </div>
            <div id="bloco6">
            <Arma nome="soco" imagem={soco}/>
            <Arma nome="arco" imagem={arco}/>
            <Arma nome="espada" imagem={espada}/>
            </div>
            <div id="bloco7">
              <button id="botao" onClick={this.calcularDano}>Calcular Dano</button>       
            </div>

            <p className="resposta">{this.state.resposta}</p>
  
        </div>
      )
    }
  }

  export default Calculadora;