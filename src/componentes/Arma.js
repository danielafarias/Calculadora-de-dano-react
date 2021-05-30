import React from "react";

class Arma extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arma: "",
      borda: ""
   }
}

  criarBorda = (arma) => {
  this.setState({
    arma: arma,
    borda: "3px solid blue"
  })
}

  render() {
    return (
      <div id={this.props.nome} className="arma" onClick={this.criarBorda} style={{border: this.state.borda}}>
            <img src={this.props.imagem} width="160px"/>
             <p>{this.props.nome}</p>
        </div>
    )}
  }

  export default Arma;