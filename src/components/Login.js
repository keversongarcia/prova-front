import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { http } from "../api";
import styles from "../components/Login.module.css";
import useForm from "../Hooks/useForm";
import Button from "./Forms/Button";
import Input from "./Forms/Input";

const Login = ({ history }) => {
  const username = useForm();
  const password = useForm();

  const data = {
    username: username.value,
    password: password.value,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const response = await http.post("/auth/login", data);

      if (response.status === 200) {
        history.push("/");
      }

      const token = response.headers.authorization;
      localStorage.setItem("token", token);

      // const json = await response.json();
      // console.log(json.headers);
      // console.log(json);
    }
  }

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.loginbanner}>
          <h1 className={styles.h1banner}>Iquefome!</h1>
        </div>
        <div className={styles.loginbox}>
          <h1 className={styles.h1login}>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            <Button>Entrar</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
