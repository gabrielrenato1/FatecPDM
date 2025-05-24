
import React from "react"
import Accordion from "./components/Accordion"
import Busca from "./components/Busca"

const itens = [
  {
    titulo: "Java",
    conteudo: "Linguagem compilada e interpretada."
  },
  {
    titulo: "Python",
    conteudo: "Linguagem interpretada e dinamicamente típada."
  },
  {
    titulo: "Javascript",
    conteudo: "Interpretada. Executa do lado do cliente e do lado do servidor."
  },
]

const App = () => {

    const expressaoJSX = <Busca/>
    return (
        <div>
          {expressaoJSX}
          {/* <Accordion itens={itens}/> */}
        </div>
    )
}

export default App