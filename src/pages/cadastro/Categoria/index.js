
import React, { useState } from 'react'
import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import PageDefault from '../../../components/PageDefault'

import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000'
  }

  const [values, setValues] = useState(valoresInicias);


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
      <Link to="/">
        Voltar pra Home
      </Link>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault()
        console.log("Tentou submitar né?")
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ])
      }}>
        <div>
        <label>
          Nome da Categoria:
          <input
          type="text"
          value={nomeDaCategoria}
          onChange={function handleNome(event) {
            //setNomeDaCategoria(event.target.value)
          }}

          />
        </label>
        </div>

        <div>
        <label>
          Descrição:
          <textarea
          type="text"
          value={nomeDaCategoria}
          onChange={function handleNome(event) {
            //setNomeDaCategoria(event.target.value)
          }}
          />
        </label>
        </div>

        <div>
        <label>
          Cor:
          <input
          type="color"
          value={nomeDaCategoria}
          onChange={function handleNome(event) {
            //setNomeDaCategoria(event.target.value)
          }}
          />
        </label>
        </div>
        <button>
          Enviar
        </button>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
          })}
        </ul>
      </form>

    </PageDefault>
  )
}

export default CadastroCategoria
