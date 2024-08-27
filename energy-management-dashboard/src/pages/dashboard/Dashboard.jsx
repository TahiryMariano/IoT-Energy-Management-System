import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgNotification from "../../assets/notification.png";
import imgAnalytics from "../../assets/carbon_analytics.png";
import imgDashboard from "../../assets/dashboard.png";
import imgLogout from "../../assets/logout.png";
import imgLogo from "../../assets/logo-no-background.png";
import styles from "./Dashboard.module.scss";
import { useNavigate } from "react-router";
import DashboardTab from "./tab/dashboard/DashboardTab";
import Analyse from "./tab/analyse/Analyse";
import Notification from "./tab/notification/Notification";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "analytics":
        return <Analyse />;
      case "notifications":
        return <Notification />;
      default:
        return <Dashboard />;
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Redirection vers le tableau de bord
    navigate("/");
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={imgLogo} alt="Energy Management" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className={activeTab === "dashboard" ? styles.active : ""}
                onClick={() => handleTabClick("dashboard")}
              >
                <img src={imgDashboard} alt="tableau de bord" />
                Tableau de bord
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === "analytics" ? styles.active : ""}
                onClick={() => handleTabClick("analytics")}
              >
                <img src={imgAnalytics} alt="analyses" />
                Analyses
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === "notifications" ? styles.active : ""}
                onClick={() => handleTabClick("notifications")}
              >
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

      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
