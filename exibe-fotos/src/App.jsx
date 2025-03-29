import { Component } from "react"
import Busca from "./components/Busca"
import env from 'react-dotenv'
import { createClient } from 'pexels'
class App extends Component {

  pexelsClient = null

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }

  componentDidMount = () => {
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  render(){
    return (
      <div
        className="grid justify-content-center">
  
          <div className="col-12">
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className="col-12">
            <Busca 
              dica="Buscar imagens de..."
              onBuscaRealizada={this.onBuscaRealizada}
            />
          </div>
  
      </div>
    )
  }
  
}

export default App
