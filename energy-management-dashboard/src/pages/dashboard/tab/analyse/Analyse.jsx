import React, { useState } from "react";
import styles from "./Analyse.module.scss";

const Analytics = () => {
  const [timeFrame, setTimeFrame] = useState("hours"); // Période de temps sélectionnée
  const [predictions, setPredictions] = useState([]); // Stocke les prédictions

  // Fonction pour générer des prédictions aléatoires en fonction de la période sélectionnée
  const generatePredictions = (timeFrame) => {
    const predictions = [];
    let max;
    switch (timeFrame) {
      case "hours":
        max = 24; // Prédictions pour 24 heures
        for (let i = 1; i <= max; i++) {
          predictions.push({
            label: `${i}h`,
            value: (Math.random() * 10).toFixed(2), // Prédiction en kWh
          });
        }
        break;
      case "days":
        max = 7; // Prédictions pour 7 jours
        for (let i = 1; i <= max; i++) {
          predictions.push({
            label: `Jour ${i}`,
            value: (Math.random() * 50).toFixed(2),
          });
        }
        break;
      case "weeks":
        max = 4; // Prédictions pour 4 semaines
        for (let i = 1; i <= max; i++) {
          predictions.push({
            label: `Semaine ${i}`,
            value: (Math.random() * 200).toFixed(2),
          });
        }
        break;
      case "months":
        max = 12; // Prédictions pour 12 mois
        for (let i = 1; i <= max; i++) {
          predictions.push({
            label: `Mois ${i}`,
            value: (Math.random() * 800).toFixed(2),
          });
        }
        break;
      default:
        break;
    }
    setPredictions(predictions);
  };

  // Gérer la sélection de la période de temps
  const handleTimeFrameChange = (e) => {
    const selectedTimeFrame = e.target.value;
    setTimeFrame(selectedTimeFrame);
    generatePredictions(selectedTimeFrame);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Analyse des Prédictions</h2>
      <div className={styles.inputGroup}>
        <label>
          Période de temps :
          <select
            value={timeFrame}
            onChange={handleTimeFrameChange}
            className={styles.select}
          >
            <option value="hours">Prochaines Heures</option>
            <option value="days">Prochains Jours</option>
            <option value="weeks">Prochaines Semaines</option>
            <option value="months">Prochains Mois</option>
          </select>
        </label>
      </div>
      <div className={styles.predictionList}>
        <h3>Prédictions de consommation en kWh :</h3>
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index} className={styles.predictionItem}>
              {prediction.label} : {prediction.value} kWh
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
