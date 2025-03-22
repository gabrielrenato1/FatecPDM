import React from "react"

class EstacaoClimatica extends React.Component {

    timer = null;

    state = {
        data: null
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            const date = new Date()
            this.setState({
                data: date.toLocaleDateString() + " " + date.toLocaleTimeString()
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){

        return (
            <div className="card">
              <div className="card-body">
                
                <div 
                  className="d-flex align-items-center rounded mb-2 p-5"
                  style={{height: "10rem"}}>
                    <i className={`fas fa-5x fa-${this.props.icone}`}></i>
                    <p className="w-75 ms-3 text-center fs-1">
                      {this.props.estacao}
                    </p>
                </div>

                <div>
                  <p className="text-center">
                    {this.props.latitude ? 
                      `Coordenadas: ${this.props.latitude}, ${this.props.longitude}.
                       Data: ${this.state.data}.`
                      :
                      this.props.mensagemErro ?? 
                      "Clique no botão para saber sua estação climática"
                    }
                  </p>
                </div>

                <button 
                  onClick={this.props.obterLocalizacao}
                  className="btn btn-outline-primary w-100 mt-2">
                  Qual a minha estação?
                </button>

              </div>
            </div>
        )

    }

}

export default EstacaoClimatica