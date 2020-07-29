import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import { SContainer } from "./styles.js"

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <SContainer>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={`O que é a Ciência? O Método Científico é uma das maiores criações da humanidade, com ele somos capazes de entender o mundo macroscópico e microscópico, desde os átomos ao cosmos. O conhecimento humano é procedual e, por isso, exige que acreditemos no que foi antes descoberto.\n Seria então a ciência uma questão de fé?`}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
      </SContainer>
    </div>
  );
}

export default Home;
