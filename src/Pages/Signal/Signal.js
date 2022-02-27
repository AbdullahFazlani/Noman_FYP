import React, { useState } from "react";
import { Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import styles from "./Signal.module.css";
import { ToastContainer, toast } from "react-toastify";
import { BsThreeDotsVertical } from "react-icons/bs";

const Signal = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");
  const [buySell, setBuySell] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleClose1 = () => {
    setShow1(false);
  };

  const confirmToast = () => {
    toast.success("Signal Added Successfully");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  return (
    <div>
      <Row>
        <Col md={8}>
          <div className={styles.header}>
            <h1>Signals Section</h1>
          </div>
        </Col>
        <Col md={4}>
          <button className={styles.add} onClick={handleShow}>
            Add Signal
          </button>
        </Col>
      </Row>

      <div className={styles.card}>
        <Row>
          <Col md={8}>
            <h4>{title}</h4>
            <h3>{company}</h3>
            <p>{desc}</p>
          </Col>
          <Col md={3}>
            <div
              className={
                buySell === "Buy" || buySell === "Strong Buy"
                  ? styles.buySell
                  : styles.buySell1
              }
            >
              {buySell}
            </div>
          </Col>
          <Col md={1}>
           
            <Dropdown>
              <Dropdown.Toggle variant="success" >
              <BsThreeDotsVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                <Dropdown.Item >Delete</Dropdown.Item>
                <Dropdown.Item onClick={handleShow1}>Tweets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Adding Signal</Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col md={3}>
                <h5>Title :</h5>
              </Col>
              <Col md={9}>
                <input
                  type="text"
                  className={styles.titleText}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className={styles.company}>
            <Row>
              <Col md={3}>
                <h5>Company :</h5>
              </Col>
              <Col md={9}>
                <select
                  className={styles.select}
                  onChange={(e) => setCompany(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>
            </Row>
          </div>

          <div className={styles.description}>
            <Row>
              <Col md={3}>
                <h5>Description:</h5>
              </Col>
              <Col md={9}>
                <textarea
                  cols={30}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </Col>
            </Row>
          </div>

          <div className={styles.buy}>
            <h5>Buy/Sell</h5>
            <div onChange={(e) => setBuySell(e.target.value)}>
              <input type="radio" name="signal" value="Sell" />
              Sell
              <input type="radio" name="signal" value="Strong Sell" />
              Strong Sell
              <input type="radio" name="signal" value="Buy" />
              Buy
              <input type="radio" name="signal" value="Strong Buy" />
              Strong Buy
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.add1} onClick={confirmToast}>
            add
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show1}
        onHide={handleClose1}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Tweets of that company</Modal.Header>
        <Modal.Body>
          <div>
            Here goes all your tweets
            </div>
        </Modal.Body>
        <Modal.Footer>
          Footer ki zrurat nh ha hata diyo
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Signal;
