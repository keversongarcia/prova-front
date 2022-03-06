import "../components/login.css";
import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="login-banner">
          <h1 className="h1-banner">Iquefome!</h1>
        </div>
        <div className="login-box">
          <h1 className="h1-login">Login</h1>
          <form>
            <label>Usuário: </label>
            <input></input>
            <label>Senha: </label>
            <input></input>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
