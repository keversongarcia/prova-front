import React from "react";
import { TOKEN_POST, TOKEN } from "../api";
import styles from "../components/Login.module.css";
import useForm from "../Hooks/useForm";
import Button from "./Forms/Button";
import Input from "./Forms/Input";

const Login = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      for (var pair of response.headers.entries()) {
        //Converte entradas do header, para pegar o authorization
        console.log(pair[0] + ": " + pair[1]);
      }
      console.log(response.headers);
      // window.localStorage.setItem("token", TOKEN);

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
