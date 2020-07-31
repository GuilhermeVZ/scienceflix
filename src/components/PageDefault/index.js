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

const DivCont = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--bodyPaddingTop));
`

function PageDefault({ children }) {
  return (
    <DivCont>
      <Menu/>
      <Main>
        { children }
      </Main>
      <Footer/>
    </DivCont>
  )
}

export default PageDefault
