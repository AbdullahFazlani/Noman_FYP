import React from 'react';
import { AiOutlineLine, AiOutlineMinus } from 'react-icons/ai';
import image1 from './Login.png'
import { Col, Row } from 'react-bootstrap';
import styles from './Login.module.css'


const Login = () => {
  return <div className={styles.background}>
            <Row>
                <Col xs={12} sm={12} md={4}>
                <div className={styles.header1}>
                      <span className={styles.color}><AiOutlineLine style={{fontSize:"50px"}}/></span>
                       Welcome to <span className={styles.color}> Stocks</span>
            </div>
            <h1>Member <span className={styles.color}> Login</span></h1>

            <div className={styles.form}>
                            <form>
                                <input type="email" placeholder='Email *' className={styles.input}/>
                                <input type="password" placeholder='Password *' className={styles.input}/>
                                <div className={styles.greyText}>
                                    Forget your Password?
                                </div>
                                <button className={styles.loginButton}>
                                    Login Now
                                </button>

                            </form>
            </div>
           <div className={styles.greyText}>
            New to Webewox? <span className={styles.color}> 
           <a href="/signup" className={styles.hideLink}>&nbsp;SignUp</a> 
            </span>
            </div>
         <div className={styles.back}> 
         <a href="/" className={styles.back}>
          &lt; Back to Hamepage
          </a>
          </div>
                </Col>
                <Col md={8} className='d-none d-md-block d-lg-block'>
                    <div className={styles.image1}>
                        <img src={image1} width={700}/>
                    </div>
                </Col>
            </Row>
           
        </div>;
};

export default Login;
