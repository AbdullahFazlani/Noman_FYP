import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { FiLogOut, MdLogout } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(true);
  const [signal, setSignal] = useState(false);
  const [sentiment, setSentiment] = useState(false);
  const [request, setRequest] = useState(false);
  const [profile, setProfile] = useState(false);
  const [report, setReport] = useState(false);

  const openDashboard = () => {
    setDashboard(true);
    setProfile(false);
    setRequest(false);
    setSentiment(false);
    setSignal(false);
    setReport(false);
  };

  const openSignal = () => {
    setDashboard(false);
    setProfile(false);
    setRequest(false);
    setSentiment(false);
    setSignal(true);
    setReport(false);
  };

  const openSentiments = () => {
    setDashboard(false);
    setProfile(false);
    setRequest(false);
    setSentiment(true);
    setSignal(false);
    setReport(false);
  };

  const openRequest = () => {
    setDashboard(false);
    setProfile(false);
    setRequest(true);
    setSentiment(false);
    setSignal(false);
    setReport(false);
  };

  const openReport = () => {
    setDashboard(false);
    setProfile(false);
    setRequest(false);
    setSentiment(false);
    setSignal(false);
    setReport(true);
  };

  const openProfile = () => {
    setDashboard(false);
    setProfile(true);
    setRequest(false);
    setSentiment(false);
    setSignal(false);
    setReport(false);
  };
  return (
    <div>
      <Container>
        <div className={styles.container}>
          <div className={styles.logo}>Stocks</div>
          <div className={styles.logout}>
            Logout <MdLogout style={{ fontSize: "2rem", paddingLeft: "1%" }} />
          </div>
        </div>
      </Container>
      <div>
        <Container>
          <Row>
            <Col md={3}>
              <button className={dashboard? styles.btn2 : styles.btn1} onClick={openDashboard}>
                DashBoard
              </button>
              <button className={signal? styles.btn2:styles.btn1} onClick={openSignal}>
                Signals
              </button>
              <button className={sentiment?styles.btn2: styles.btn1} onClick={openSentiments}>
                Sentiments
              </button>
              <button className={request?styles.btn2: styles.btn1} onClick={openRequest}>
                User Request
              </button>
              <button className={report?styles.btn2: styles.btn1} onClick={openReport}>
                Report
              </button>
              <button className={profile?styles.btn2: styles.btn1} onClick={openProfile}>
                Profile
              </button>
            </Col>
            <Col md={9}>
                {dashboard && <div>Dashboard</div>}
                {signal && <div>Signal</div>}
                {sentiment && <div>Sentiments</div>}
                {request && <div>Request</div>}
                {report && <div>Report</div>}
                {profile && <div>Profile</div>}
                </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
