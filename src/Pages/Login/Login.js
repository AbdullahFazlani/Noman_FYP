import React, { useState } from 'react';
import { AiOutlineLine, AiOutlineMinus } from 'react-icons/ai';
import image1 from './Login.png'
import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap';
import styles from './Login.module.css'
import MemberLogin from './MemberLogin';
import ExpertLogin from './ExpertLogin';


const Login = () => {
    const [member,setMember]=useState(true);
    
    const showMember=()=>{
        setMember(true);
    }
    const showExpert=()=>{
        setMember(false);
    }
    
  return <div className={styles.background}>
            
            <Row>
                <Col xs={12} sm={12} md={4}>
               
                <div className={styles.header1}>
                      <span className={styles.color}><AiOutlineLine style={{fontSize:"50px"}}/></span>
                       Welcome to <span className={styles.color}> Stocks</span>
            </div>
           <div >
            <button className={member ? styles.btn2 : styles.btn1}  onClick={showMember} active>Member</button>
                <button className={!member ?styles.btn2 : styles.btn1} onClick={showExpert} >Expert</button>
                </div>
                {member?
               <MemberLogin/>
                :
                <ExpertLogin/>
                }
            
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
