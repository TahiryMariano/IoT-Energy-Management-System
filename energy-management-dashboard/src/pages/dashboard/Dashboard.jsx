import React from "react";
import imgNotification from "../../assets/notification.png";
import imgUser from "../../assets/user.png";
import imgAnalytics from "../../assets/carbon_analytics.png";
import imgDashboard from "../../assets/dashboard.png";
import imgLogout from "../../assets/logout.png";
import imgLogo from "../../assets/logo.png";
import styles from "./Dashboard.module.scss";
import { useNavigate } from "react-router";
import EnergyConsumptionChart from "../../components/EnergyConsumptionChart";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    // Redirection vers le tableau de bord
    navigate("/");
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={imgLogo} alt="Energy Management" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" className={styles.active}>
                <img src={imgDashboard} alt="tableau de bord" />
                Tableau de bord
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgAnalytics} alt="analyses" />
                Analyses
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgNotification} alt="notifications" /> Notifications
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.logout} onClick={handleLogout}>
          <a href="index.html">
            <img src={imgLogout} alt="" /> Log out
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <header>
          <h1>Tableau de bord</h1>
          <div className={styles.userProfile}>
            <img src={imgUser} alt="User" />
          </div>
        </header>

        <main>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Puissance totale</h3>
              <div className={styles.circleChart}>
                <span>450W</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3>Energies consommées</h3>
              <div className={styles.meter}>
                <span>18.0 Wh</span>
              </div>
              <p>Consommation: moyenne</p>
            </div>

            <div className={styles.card}>
              <h3>Tension totale</h3>
              <div className={styles.circleChart}>
                <span>220V</span>
              </div>
            </div>
          </div>

          <div className={styles.chart}>
            <h3>Consommation d'énergie par heure</h3>
            <EnergyConsumptionChart />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
