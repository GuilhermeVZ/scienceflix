import React from 'react'
import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import PageDefault from '../../../components/PageDefault'

import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">
        Voltar pra Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria