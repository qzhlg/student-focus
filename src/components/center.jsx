import React from 'react'
import styles from '../pages/home/visual/index.css'
import Dialog from './dialog/dialog.jsx'
 function Center() {
     const addMethod=(str)=>{
        console.log(`this is ${str} method`)
     }
    return (
        <div className={styles.center}>
        <div className={styles.centerLleft}>
            <button onClick={()=>addMethod("添加成绩")}>添加成绩</button>
            <button onClick={()=>addMethod("添加分析和解决方案")}>添加分析和解决方案</button>
        </div>
        <div className={styles.centerRight}>
        <button>查看和编辑该生所有成绩</button>
        </div>
        {/* <Dialog></Dialog> */}
    </div>
    )
}
export default Center