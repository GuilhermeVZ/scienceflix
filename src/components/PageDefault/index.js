import React from 'react';
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  padding: 15px 5%;
  flex: 1;
`

function PageDefault({ children }) {
  return (
    <>
      <Menu/>
      <Main>
        { children }
      </Main>
      <Footer/>
    </>
  )
}

export default PageDefault