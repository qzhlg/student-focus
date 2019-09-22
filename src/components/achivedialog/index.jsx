import React, { useState } from 'react'
import styles from './index.css'
function Achievment(props) {
    const [val, setVal] = useState("")
    const [num, setNum] = useState("")
    const [msg, setMsg] = useState("")
    const { title, isShowDialog } = props
    const getVal = (e) => {
        setVal(e.target.value)
    }
    const getNum = (e) => {
        setNum(e.target.value)
    }
    const getMsg = (e) => {
        setMsg(e.target.value)
    }
    // 点击按钮
    const clickMethod = (str) => {
        if (str === "取消") {
            isShowDialog()
        } else {
            if (val && num) {
                isShowDialog()
            } else {
                alert("内容不能为空！")
            }
        }
    }

    return (
        <div className={styles.achivebox}>

            {title === "编辑内容" ? <div className={styles.achiveform}>
                <h2>{title}</h2>
                <p>
                    理论 <input type="text" placeholder="0-100之间数字" value={val} onChange={getVal} />
                </p>
                <p>
                    技能 <input type="text" placeholder="0-100之间数字" value={num} onChange={getNum} />
                </p>
                <p>
                    <span>日考
                   <input type="checkbox" />
                    </span>
                    <span>周考
                    <input type="checkbox" />
                    </span>
                </p>
                <p>
                    <label htmlFor="">
                        分析解决方案
             <textarea name="" id="" className={styles.text} value={msg} onChange={getMsg}></textarea>
                    </label>
                </p>
                <div className={styles.btn}>
                    < button className={styles.delete}>取消</button>
                    <button className={styles.sure} onClick={() => clickMethod("确定")}>确定</button>
                </div>


            </div> : <div className={styles.achiveform}>
                    <h2>你确定删除吗？</h2>
                    <div className={styles.btn}>
                        <button className={styles.delete}>取消</button>
                        <button className={styles.sure} onClick={() => clickMethod("确定")}>确定</button>
                    </div>
                </div>}
        </div>
    )
}
export default Achievment