
import React, {useState} from "react"
import { Card } from "primereact/card"
import "./Accordion.css"

const Accordion = ({itens}) => {

	const [indiceAtivo, setIndiceAtivo] = useState(null)
	const itemClicado = (indice) => {
		setIndiceAtivo(indice)
	}

	const expressaoJSX = itens.map((item, indice) => {
		const classExibirIcone = (indice === indiceAtivo ? "down" : "right")
		const classExibirConteudo = (indice === indiceAtivo ? "" : "hidden")

		return (
			<Card id="accordion" key={indice} className="border-1 border-400">
				<div onClick={() => itemClicado(indice)}>
					<i className={`pi pi-angle-${classExibirIcone}`}></i>
					<h4 className="inline ml-3">{item.titulo}</h4>
				</div>
				<p className={classExibirConteudo}>{item.conteudo}</p>
			</Card>	
		)
	})

	return (
		<div>
			{expressaoJSX}
		</div>
			
	)

}

export default Accordion