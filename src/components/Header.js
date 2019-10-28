import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header>
    <h1>Despesismo</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Página principal</NavLink>
    <NavLink to="/create" activeClassName="is-active">Adicionar despesa</NavLink>
    <button onClick={startLogout}>Sair</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect (undefined, mapDispatchToProps)(Header);

