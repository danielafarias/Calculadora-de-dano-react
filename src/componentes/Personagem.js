import React from 'react';

class Personagem extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        borda: ""
     }
 }

    criarBorda = (e) => {
        this.setState({
          borda: "3px solid blue"
        })
    }

    render() {
      return (
        <div id={this.props.nome} className='elemento' onClick={this.criarBorda} style={{border: this.state.borda}}>
            <img src={this.props.imagem} width="200px"/>
             <p>{this.props.nome}</p>
        </div>
      )
    }
  }

  export default Personagem;