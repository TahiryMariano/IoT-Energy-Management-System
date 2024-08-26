import React from "react";
import imgIspm from "../../../../assets/logo_ispm.png";
import styles from "./DashboardTab.module.scss";
import EnergyConsumptionChart from "../../../../components/EnergyConsumptionChart";

function DashboardTab() {
  return (
    <div className={styles.dashboardContainer}>
      <header>
        <h1>Tableau de bord</h1>
        <div className={styles.userProfile}>
          <img src={imgIspm} alt="Ispm" />
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
  );
}

export default DashboardTab;
