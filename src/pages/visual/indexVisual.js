import React from 'react';
import { connect } from 'dva';
import styles from './indexVisual.css'

function IndexVisual(){
    return (
         <div className={styles.parent}>
            <div className={styles.side}>
                <span>重点关注学生考试成绩统计图</span>
            </div>
            <div className={styles.tap}>
                <p>切换班级：</p>
                <span>1234</span>
                <span>4567</span>
                <span>7891</span>
            </div>
            {/* <div className={styles.box}>
                <div>添加学生：
                <input type="text" placeholder="输入姓名"/>
                </div>
                <input type="text" placeholder="未位次数"/>
                <input type="text" placeholder="结对子，帮扶对象"/>
                <span>添加</span>
            </div> */}
            
         <div className={styles.main}></div>


         <div className={styles.foot}>
            <div className={styles.footend}>
                <button>添加成绩+</button>
                <button>添加分析和解决方案+</button>
            </div>
            <div><button>查看和编辑该生所有成绩</button></div>
         </div>
     </div>
 
    )
}

IndexVisual.propTypes = {
};

export default connect()(IndexVisual)