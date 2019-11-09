import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header className = "header">
    <div className = "content_container">
      <div className = "header_content">
         <Link className = "header_title" to="/dashboard">
            <h1>Despesismo</h1>
          </Link>
        <button className= "button button--link" onClick={startLogout}>Sair</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect (undefined, mapDispatchToProps)(Header);

