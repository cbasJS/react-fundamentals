import React from "react";

import PropTypes from "prop-types";

import "./stylesLogin.css";

const propTypes = { onAuth: PropTypes.func.isRequired };

const Login = props => {
  const { onAuth } = props;
  return (
    <div className="rootLogin">
      <p className="textLogin">
        Necesitamos que inicies sesion con tu cuenta de GitHub para que puedas
        leer y escribir mensajes
      </p>
      <button onClick={onAuth} className="btnLogin">
        <span className="fa fa-github" style={{ marginRight: 10 }} />
        Login con GitHub
      </button>
    </div>
  );
};

Login.propTypes = propTypes;

export default Login;
