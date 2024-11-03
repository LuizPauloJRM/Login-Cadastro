/*import React, { useState } from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // Controla a exibição do formulário

  const handleLogin = (email, senha) => {
    const user = JSON.parse(localStorage.getItem("user")); // Tenta recuperar o usuário do localStorage
    if (user && user.email === email && user.senha === senha) {
      setIsLoggedIn(true); // Simula login bem-sucedido
      alert("Login bem-sucedido!"); // Mensagem de sucesso
    } else {
      alert("Email ou senha incorretos."); // Mensagem de erro
    }
  };

  const handleCadastro = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // Armazena o usuário no localStorage
    alert("Cadastro realizado com sucesso!"); // Mensagem de sucesso
    setShowLogin(true); // Alterna para o formulário de login após o cadastro
  };

  const toggleForm = () => {
    setShowLogin(!showLogin); // Alterna entre login e cadastro
  };

  return (
    <div>
      <h1>Login e Cadastro</h1>
      {isLoggedIn ? (
        <h2>Bem-vindo de volta!</h2>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {showLogin ? (
            <>
              <Login onLogin={handleLogin} />
              <button onClick={toggleForm}>Criar Conta</button>
            </>
          ) : (
            <>
              <Cadastro onCadastro={handleCadastro} />
              <button onClick={toggleForm}>Já Tenho Conta</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;*/
import React, { useState } from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Popup from "./components/Popup"; // Importando o Popup

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // Controle para exibir o popup
  const [popupMessage, setPopupMessage] = useState(""); // Mensagem do popup

  const handleLogin = (email, senha) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.senha === senha) {
      setIsLoggedIn(true);
      setPopupMessage("Login bem-sucedido!");
      setShowPopup(true);
    } else {
      setPopupMessage("Email ou senha incorretos.");
      setShowPopup(true);
    }
  };

  const handleCadastro = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setPopupMessage("Cadastro realizado com sucesso!");
    setShowPopup(true);
    setShowLogin(true);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Login e Cadastro</h1>
      {isLoggedIn ? (
        <h2>Bem-vindo de volta!</h2>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {showLogin ? (
            <>
              <Login onLogin={handleLogin} />
              <button onClick={toggleForm}>Criar Conta</button>
            </>
          ) : (
            <>
              <Cadastro onCadastro={handleCadastro} />
              <button onClick={toggleForm}>Já Tenho Conta</button>
            </>
          )}
        </div>
      )}
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
    </div>
  );
};

export default App;
