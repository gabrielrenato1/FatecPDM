import React, { useEffect, useState } from "react"
import { IconField} from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import striptags from 'striptags'

const Busca = ({itens}) => {

    const [termoBusca, setTermoBusca] = useState("")
    const [resultados, setResultados] = useState([])

    // Executa todas vezes
    useEffect(() => {})

    // Executa somente uma vez
    useEffect(() => {}, [])

    // Executa toda vez que termoBusca atualizar
    useEffect(() => {
        const fazerBusca = async () => {

            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    format: "json",
                    origin: "*",
                    srsearch: termoBusca
                }
            })

            setResultados(data.query.search)

        }

        if(termoBusca && resultados.length === 0){
            fazerBusca()
        }else{
            const timeoutID = setTimeout(() => {
                if(termoBusca){
                    fazerBusca()
                }
            }, 1000)
        }

        return () => {
            clearTimeout(timeoutID)
        }

    }, [termoBusca])

    return (
        <div>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"/>
                <InputText
                    placeholder="Buscar"
                    onChange={(e) => {setTermoBusca(e.target.value)}}
                    value={termoBusca}
                />
            </IconField>

            {
                resultados.map((resultado) => (
                    <div key={resultado.pageid} className="my-2 border border-1 border-400">
                        <div className="border-bottom border border-1 border-400 p-2 text-center font-bold">
                            {resultado.title}
                            <span>
                                <Button 
                                    icon="pi pi-send"
                                    className="ml-3 p-button-rounded p-button-secondary"
                                    onClick={() => {
                                        window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)
                                    }}    
                                />
                            </span>
                        </div>
                        <div className="p-2">
                            <p>{striptags(resultado.snippet)}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default Busca