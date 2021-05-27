function Arma(props) {
    return (
      <div id={props.nome} className="elemento">
            <img src={props.imagem} width="160px"/>
             <p>{props.nome}</p>
        </div>
    )
  }

  export default Arma;