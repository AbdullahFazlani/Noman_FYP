import React, { useState } from 'react';
import { AiOutlineLine, AiOutlineMinus } from 'react-icons/ai';

import {  Col,  Row } from 'react-bootstrap';
import styles from './Signup.module.css'
import image1 from './Signup.png'
import MemberSignup from './MemberSignup';
import ExpertSignup from './ExpertSignup';

  
 
const Signup = () => {
    const [member,setMember]=useState(true);
    
    const showMember=()=>{
        setMember(true);
    }
    const showExpert=()=>{
        setMember(false);
    }
   
  return <div className={styles.background}>
  
            <Row>
                <Col md={4}>
                <div className={styles.header1}>
                      <span className={styles.color}><AiOutlineLine style={{fontSize:"50px"}}/></span>
                       Welcome to <span className={styles.color}> Stocks</span>
            </div>
            <div >
            <button className={member ? styles.btn2 : styles.btn1}  onClick={showMember} active>Member</button>
                <button className={!member ?styles.btn2 : styles.btn1} onClick={showExpert} >Expert</button>
                </div>

          {member? <MemberSignup/>:
          <ExpertSignup/>
         }
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
