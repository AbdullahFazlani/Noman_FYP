import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./Tweets.module.css";
import { FaUsers } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
import { ImBlocked } from "react-icons/im";

const Tweets = () => {
  return (
    <div>
      <div className={styles.container}>
        <Row>
          <Col md={4}>
            <div className={styles.firstTile}>
              <Row>
                <Col>
                  <div className={styles.logo}>
                    <FaUsers />
                  </div>
                </Col>
                <Col>
                <div className={styles.tileContent}>
                      <h2>89</h2>
                      <h5>Followers</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.secondTile}>
              <Row>
                <Col>
                  <div className={styles.logo}>
                    <BiUserPlus />
                  </div>
                </Col>
                <Col>
                <div className={styles.tileContent}>
                      <h2>89</h2>
                      <h5>Request</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.thirdTile}>
              <Row>
                <Col>
                  <div className={styles.logo}>
                    <ImBlocked />
                  </div>
                </Col>
                <Col>
                  <div className={styles.tileContent}>
                      <h2>89</h2>
                      <h5>Blocked</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tweets;
