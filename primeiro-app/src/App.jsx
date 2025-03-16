const App = () => {

  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet',
    color: 'white', border: 'none', width: '100%', borderRadius: 8}

  const textoRotulo = 'Nome:'

  const obterTextoBotao = () => {
      return 'Enviar'

  }

  const aoClicar = () => {
    alert('Clicou')
  }
  return (
    <div style={{width: 768, margin: 'auto', backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label className="rotulo" htmlFor="nome" style={{display:'block', marginBottom:4}}>
        {textoRotulo}
      </label>
      <input type="text" id="nome" style={{paddingTop: 8, marginBottom: 8, borderStyle: 'hidden', 
        width: '100%', borderRadius: 8, outline: 'none' }}/>

      <button 
        onClick={aoClicar}
        style={estiloBotao}>
        {obterTextoBotao()}
      </button>
    </div>
  )
}

export default App