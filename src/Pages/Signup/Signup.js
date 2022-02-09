import React, { useState } from 'react';
import { AiOutlineLine, AiOutlineMinus } from 'react-icons/ai';

import {  Col,  Row } from 'react-bootstrap';
import styles from './Signup.module.css'
import image1 from './Signup.png'

  
 
const Signup = () => {
   
  return <div className={styles.background}>
  
            <Row>
                <Col md={4}>
                <div className={styles.header1}>
                      <span className={styles.color}><AiOutlineLine style={{fontSize:"50px"}}/></span>
                       Welcome to <span className={styles.color}> Stocks</span>
            </div>
            <h1 className={styles.h1}> <span className={styles.color}> SIGN UP NOW!</span></h1>

            <div className={styles.form}>
                            <form>
                                <input type="text" placeholder='Full Name *' className={styles.input}/>
                                <input type="email" placeholder='Email *' className={styles.input}/>
                                <input type="text" placeholder='Number *' className={styles.input}/>
                                <input type="password" placeholder='Password *' className={styles.input}/>
                               
                                <button className={styles.loginButton}>
                                    Sign Up
                                </button>

                            </form>
            </div>
           <div className={styles.greyText}>
          Already a Member?
          <a to="/signin" className={styles.color}>
          <span > 
          &nbsp;SignIn
          </span>
          </a>
          
            </div>
            <div className={styles.back}> 
         <a to="/" className={styles.back}>
          &lt; Back to Hamepage
          </a>
          </div>
                </Col>
                <Col md={8}  className='d-none d-md-block d-lg-block'>
                    <div className={styles.image1}>
                        <img src={image1} width={600}/>
                    </div>
                </Col>
            </Row>
           
        </div>;
};

export default Signup;
