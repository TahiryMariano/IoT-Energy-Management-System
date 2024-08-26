import React, { useState, useEffect } from "react";
import styles from "./Notification.module.scss";

const Notification = () => {
  const [threshold, setThreshold] = useState(2.5); // Seuil initial en kWh
  const [currentConsumption, setCurrentConsumption] = useState(0); // Consommation actuelle

  // Simuler la consommation d'énergie
  useEffect(() => {
    const interval = setInterval(() => {
      const newConsumption = (Math.random() * 5).toFixed(2); // Simule une consommation entre 0 et 5 kWh
      setCurrentConsumption(parseFloat(newConsumption));
    }, 5000); // Mise à jour toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage du composant
  }, []);

  // Gérer la modification du seuil par l'utilisateur
  const handleThresholdChange = (e) => {
    setThreshold(parseFloat(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notifications</h2>
      <div className={styles.inputGroup}>
        <label>
          Définir le seuil de consommation (kWh) :
          <input
            type="number"
            value={threshold}
            onChange={handleThresholdChange}
            step="0.1"
            min="0"
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.currentConsumption}>
        <h3>Consommation actuelle : {currentConsumption} kWh</h3>
        {currentConsumption > threshold && (
          <div className={styles.alert}>
            Alerte ! La consommation d'énergie a dépassé le seuil de {threshold}{" "}
            kWh.
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
