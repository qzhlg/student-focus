import React from 'react';
import { connect } from 'dva';
import styles from './indexPresident.css'


function President(){
    return (
        <div className={styles.President}>
           <div className={styles.box}>
           重点关注学生考试成绩统计图
           </div>
           <div className={styles.top}>
               <div className={styles.count}>
                   <p>选择班级：</p>
                   <span>1703D</span>
                   <span>1704A</span>
                   <span>1704B</span>
                   <span>1704C</span>
               </div>
           </div>
        </div>
    )
}


President.propTypes = {
};
export default connect()(President)