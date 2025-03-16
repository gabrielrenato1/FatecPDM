import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  
  const textOK = "Pedido entregue"
  const textNOK = "Pedido a caminho"
  const funcOK = () => {alert("Agradecemos o Feedback!")}
  const funcNOK = () => {alert("Verificaremos o que aconteceu!")}

  const componentFeedback = (
    <Feedback
      textOk={textOK}
      textNOK={textNOK}
      onClickOK={funcOK}
      onClickNOK={funcNOK}
    />
  )

  return (

    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="01/01/2025">
            <Pedido
              icone="headset"
              titulo="Headset"
              descricao="Headset bluetooth"
            />
            {componentFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="02/01/2025">
            <Pedido
              icone="gamepad"
              titulo="Gamepad"
              descricao="Gamepad nintendo"
            />
            {componentFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
              cabecalho="03/01/2025">
            <Pedido
              icone="hippo"
              titulo="Hipopótamo"
              descricao="Hipopótamo fêmea"
            />
            {componentFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="04/01/2025">
            <Pedido
              icone="snowman"
              titulo="Boneco de neve"
              descricao="Esse boneco se mexe sozinho"
            />
            {componentFeedback}
          </Cartao>
          
        </div>
        
      </div>
    </div>

  )
}

export default App