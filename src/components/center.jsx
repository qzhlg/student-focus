import React, { useState } from 'react'
import styles from '../pages/home/visual/index.css'
import Dialog from './dialog/dialog.jsx'
function Center() {
    const [isShow, setShow] = useState(Boolean)
    const [title,setTitle]=useState(0)
    const isShowDialog = (bool) => {
        setShow(false)
    }
    const addMethod = (str) => {
        if (str === "添加成绩") {
            setShow(true)
            setTitle("新添成绩-xx同学")
        } else {
            setShow(true)
            setTitle("新添分析-xx同学")
        }
    }
    return (
        <div className={styles.center}>
            <div className={styles.centerLleft}>
                <button onClick={() => addMethod("添加成绩")}>添加成绩</button>
                <button onClick={() => addMethod("添加分析和解决方案")}>添加分析和解决方案</button>
            </div>
            <div className={styles.centerRight}>
                <button>查看和编辑该生所有成绩</button>
            </div>
            {isShow ? <Dialog title={title} isShowDialog={isShowDialog}></Dialog> : ''}
        </div>
    )
}
export default Center