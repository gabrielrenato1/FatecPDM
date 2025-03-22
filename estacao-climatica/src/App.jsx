import React from "react"
import EstacaoClimatica from "./EstacaoClimatica";
import Loading from "./Loading";

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemErro: null
  }

  componentDidMount(){
    this.obterLocalizacao()
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  obterEstacao = (data, latitude) => {

    const anoAtual = data.getFullYear()

    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)

    const estaNoSul = latitude < 0

    if(data >= d1 && data < d2){
      return estaNoSul ? "Inverno" : "Verão"
    }

    if(data >= d2 && data < d3){
      return estaNoSul ? "Primavera" : "Outono"
    }

    if(data >= d3 || data < d4){
      return estaNoSul ? "Verão" : "Inverno"
    }

    return estaNoSul ? "Outono" : "Primavera"

  }

  icones = {
    "Primavera": "flower",
    "Verão": "umbrella-beach",
    "Outono": "leaf",
    "Inverno": "snowflake",
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = new Date()
        const estacao = this.obterEstacao(data, position.coords.latitude)
        const icone = this.icones[estacao]

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: data.toLocaleDateString() + " " + data.toLocaleTimeString(),
          icone: icone,
        })
      },
      (error) => {
        this.setState({
          mensagemErro: "Tente novamente mais tarde."
        })
      }
    )
  }

  render(){
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-xxl-6">
            <div className="d-flex align-items-center justify-content-center vh-100">
              {
                (!this.state.latitude && !this.state.mensagemErro) ?
                  <Loading
                    mensagem="Por favor, responda à solicitação de localização."
                  />
                :
                  this.state.mensagemErro ?
                    <p className="border rounded p-2 fs-1 text-center">
                      É preciso permitir acesso à localização para que seja possível
                      mostrar a sua estação climática.
                    </p>
                  :
                  <EstacaoClimatica
                    icone={this.state.icone}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    estacao={this.state.estacao}
                    data={this.state.data}
                    mensagemErro={this.state.mensagemErro}
                    obterLocalizacao={this.obterLocalizacao}
                  ></EstacaoClimatica>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

