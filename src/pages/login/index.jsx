import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './loginPage.css'

function LoginPage(props) {
  const [index, setIndex] = useState(0);
  const [userval, setUserval] = useState(0)
  const [pwdval, setPawval] = useState(0)
 
  const handSumit = () => {
    const values = { userval, pwdval }
    props.dispatch({
      type: "user/login",
      payload: values
    })
    
  }
  const handRegistry=()=>{
    const values = { userval, pwdval }
    console.log(values)
    props.dispatch({
      type: "registry/registry",
      payload: values
    })
  }
  return (
    <div className={styles.loginBox}>
      <div className={styles.top}>
        重点学生日周考成绩录入考试管理系统
      </div>
      <div className={styles.main}>
        <div className={styles.form}>
          <div className={styles.title}>
            网站工程
            </div>
          <div className={styles.page}>
            {<span className={index === 0 ? 'active' : ''} onClick={() => setIndex(0)}>登陆</span>}

            {<span className={index === 1 ? 'active' : ''} onClick={() => setIndex(1)}>注册</span>}
          </div>
          <div className={styles.form_input}>
            <p>
              <input placeholder="请输入用户名" className={styles.ipt} onChange={(e) => setUserval(e.target.value)} />
            </p>
            <p>
              <input placeholder="请输入密码" className={styles.ipt} onChange={(e) => setPawval(e.target.value)} />
            </p>

            <p>
              {index === 1 ? <button onClick={handRegistry}>注册</button> : <h6 className={styles.auto}>
                <input type="checkbox" name="" id="" />
                两周内自动登陆 <button onClick={handSumit}>登陆</button></h6>}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

LoginPage.propTypes = {

};

export default connect(({ user,registry }) => ({
  user,
  registry
}))(LoginPage);

