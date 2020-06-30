import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Links from './pages/Links';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/links" component={Links} />
        </Switch>
        </BrowserRouter>
    );
} 