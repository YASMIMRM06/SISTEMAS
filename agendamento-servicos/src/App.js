// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Servicos from './pages/Servicos';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} /> {/* Página inicial */}
      </Switch>
    </Router>
  );
};

export default App;
