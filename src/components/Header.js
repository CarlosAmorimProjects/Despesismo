import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Despesismo</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Página principal</NavLink>
    <NavLink to="/create" activeClassName="is-active">Adicionar despesa</NavLink>
  </header>
);

export default Header;
