import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ispmLogo from "../../assets/logo_ispm.png"
import logoBrand from "../../assets/ems-favicon.png"
import styles from "./Login.module.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique de traitement de connexion
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", remember);

    // Redirection vers le tableau de bord
    navigate("/dashboard");
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.leftSide}>
        <img src={ispmLogo} alt="ISPM Logo" className={styles.ispmLogo} />
        <img src={logoBrand} alt="Logo" className={styles.logoBrand} />
          <h1>Bienvenue sur</h1>
          <h2>Energy Management System</h2>
          <p>
            <span>Energy Management System (EMS)</span> est un projet électronique et
            informatique qui vise à surveiller, mesurer et optimiser la
            consommation d'énergie électrique.
          </p>
        </div>
        <div className={styles.rightSide}>
          <h2>Connexion</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.rememberForgot}>
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Souviens-moi
              </label>
              <a href="#">Mots de passe oublié?</a>
            </div>

            <button type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
