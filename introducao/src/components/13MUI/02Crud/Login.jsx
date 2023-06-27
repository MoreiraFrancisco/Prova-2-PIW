import React, { useState } from "react";



// Não conseugimos finalizar o Login, fazendo apenas o banco de dados no mongodb que serviria para autenticação

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de autenticação fictícia
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  }
}

  export default Login;