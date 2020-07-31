import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';
//import CadastroVideo from './pages/cadastro/Video'
//import CadastroCategoria from './pages/cadastro/Categoria'
//<Route path='/cadastro/video' component={CadastroVideo} />
//<Route path='/cadastro/categoria' component={CadastroCategoria} />
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path='/' component={Home} exact />
      <Route component={() => (<>Olá linda pessoa, esta página ainda está sendo construída. ass: guilherme</>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
