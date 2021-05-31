import React from 'react';
import orc from './img/orc.png';
import goblin from './img/goblin.png';
import feiticeira from './img/feiticeira.png';
import soco from './img/soco.png';
import arco from './img/arco.png';
import espada from './img/espada.png';
import './index.css';

class Personagem extends React.Component{
  // Classe-Componente de personagens
  render() {
    let classCSS = 'personagens';
    if(this.props.selecionado) {
      // If que confirma se tal personagem foi selecionado para criação de borda
      classCSS = 'personagens selecionado' 
    }
      return (
        // JSX dinamica que serve para varios personagens com className para caso selecionado e função de clique
          <div className={classCSS} id={this.props.nome} onClick={() => this.props.clicar(this.props.nome)}>
            <img src={this.props.img} width='160px'/>
            <p>{this.props.nome}</p>
          </div>
      )
    }
}

class Arma extends React.Component{
  // Classe-Componente de armas
  render() {
    let classCSS = 'armas';
    if(this.props.selecionado) {
      // If que confirma se tal arma foi selecionado para criação de borda
      classCSS = 'arma selecionado'
    }

    return (
      // JSX dinamica que serve para varias armas com className para caso selecionada e função de clique
      <div className={classCSS} id={this.props.nome} onClick={() => this.props.clicar(this.props.nome)}>
        <img src={this.props.imagem} width='140px' />
        <p>{this.props.nome}</p>
      </div>

    )
  }
} 

class Calculadora extends React.Component {
  // Classe-Componente da Calculadora em si
  constructor(props) {
    super(props);
    // Criando um estado inicial nulo
    this.state = {}
  }

  selecionarPersonagem(personagemSelecionado) {
    this.setState({
      personagem: personagemSelecionado
      // Define no estado o personagem selecionado
    })  
  }

  selecionarArma(armaSelecionada) {
    this.setState({
      arma: armaSelecionada
      // Define no estado a arma selecionada
    })
  }

  calcularDano() {
    // Função para calcular o dano
    let personagem = this.state.personagem; // Personagem escolhido
    let arma = this.state.arma; // Arma escolhida
    let resposta = ''; // Resposta nula inicial
      if (personagem && arma) {
        // Confirmação se o usuário selecionou um usuario E uma arma
        let defesa = 0; // Defesa inicial
        let ataque = Math.floor(Math.random()*100) + 1; 
        // Ataque aleatório, entregue para o usuário como um dado de valores de 0 a 100

        // Defesas de cada personagem:
        if ( personagem === 'goblin') {
          defesa = 30;
        } else if (personagem === 'orc') {
          defesa = 80;
        } else {
          defesa = 50;
        }

        // Confirmação se o usuário venceu ou perdeu e mostrando o valor do dado
        if (ataque > defesa) {
          resposta = `Dado: ${ataque}; Parabéns, você conseguiu derrota-lo!`
        } else if (ataque < defesa) {
          resposta = `Dado: ${ataque}; Uma pena, não foi dessa vez, tente novamente.`
        }

        // A resposta será atualizada no estado:
        this.setState({
          resposta: resposta
        })
      } else {
        // Para caso o usuário não selecione um personagem e/ou arma
        resposta = "Selecione um personagem e/ou arma."
      }
        this.setState({
          // assim a resposta do estado também será alterada
          resposta: resposta
        })
      }


  // O que vai ser renderizado na web    
  render() { 
    return (
      <section id="calculadora"> 
        <div id="calculadora-header">
            <h1>Calculadora de Dano</h1>
        </div>

        <div id="bloco1">
            <strong><p>Selecione o personagem</p></strong>
        </div>

        <div id="bloco2">
          <Personagem img={orc} nome='orc' selecionado={this.state.personagem === 'orc'} clicar={(monstro) => this.selecionarPersonagem(monstro)}/>
          <Personagem img={goblin} nome='goblin' selecionado={this.state.personagem === 'goblin'} clicar={(monstro) => this.selecionarPersonagem(monstro)}/>
          <Personagem img={feiticeira} nome='feiticeira' selecionado={this.state.personagem === 'feiticeira'} clicar={(monstro) => this.selecionarPersonagem(monstro)}/> 
        </div>

        <div id="bloco3">
            <strong><p>Selecione uma arma</p></strong>
        </div>

        <div id="bloco4">
          <Arma imagem={soco} nome='soco' selecionado={this.state.arma === 'soco'} 
            clicar={(armas) => this.selecionarArma(armas)}/>
          <Arma imagem={arco} nome='arco' selecionado={this.state.arma === 'arco'} 
            clicar={(armas) => this.selecionarArma(armas)}/>
          <Arma imagem={espada} nome='espada' selecionado={this.state.arma === 'espada'} 
            clicar={(armas) => this.selecionarArma(armas)}/>
        </div>

        <div>
            <button id="botao" onClick={ () => this.calcularDano()} value="calcularDano">Calcular dano</button>

            <p id="resposta">{this.state.resposta}</p>
        </div>

      </section>

    )
  };

}

// Para exportar a calculadora para o index.js
export default Calculadora;