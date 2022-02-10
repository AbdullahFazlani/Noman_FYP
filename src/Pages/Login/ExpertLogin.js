import React from 'react';
import styles from './Login.module.css'


const ExpertLogin = () => {
  return <div>
  <h1 style={{fontSize:"2.5rem",textAlign:"center",paddingTop:"5%"}}>Expert <span className={styles.color}> Login</span></h1>

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
</div>;
};

export default ExpertLogin;
