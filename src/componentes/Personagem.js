import React from 'react';

class Personagem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        estilo: 'border: 0px'
      };
    }
    
    selecionarPersonagem() {
      const estilo = this.state.estilo
  
      if (estilo === null) {
      this.setState({estilo: 'border: 2px blue solid'})}
    }
    
    render() {
      return (
        <div id={this.props.nome} onClick={() => this.props.onClick()} style={this.state.estilo}>
            <img src={this.props.imagem} width="200px"/>
             <p>{this.props.nome}</p>
        </div>
      )
    }
  }

  export default Personagem;