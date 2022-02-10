import React from 'react';
import styles from './Signup.module.css'


const MemberSignup = () => {
  return <div>
  <h1 style={{fontSize:"2.6rem",textAlign:"center",paddingTop:"5%"}} className={styles.h1}> <span className={styles.color}>MEMBER SIGN UP !</span></h1>

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
      <a href="/signin" className={styles.color}>
      <span > 
      &nbsp;SignIn
      </span>
      </a>

      </div>
      <div className={styles.back}> 
      <a href="/" className={styles.back}>
      &lt; Back to Hamepage
      </a>
      </div>
</div>;
};

export default MemberSignup;
