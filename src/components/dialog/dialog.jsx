import React, { useState } from 'react'
import { DatePicker } from 'antd';
import styles from './dialog.css'

function Dialog(props) {
    const [val, setVal] = useState("")
    const [num, setNum] = useState("")
    const [mes, setMes] = useState("")
    const [message, setMessage] = useState("")
    const { title, isShowDialog } = props
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    const getval = (e) => {
        setVal(e.target.value)
        let reg = /^(0,100)$/
        if (!reg.test(val)) {
            // alert("请输入正确的数据格式")
            return false
        } else {
            return true
        }
    }
    const getnum = (e) => {
        setNum(e.target.value)
    }
    const getMes = (e) => {
        setMes(e.target.value)
        console.log(mes)
    }
    const getMessage = (e) => {
        setMessage(e.target.value)
    }
    const clickMethod = (str) => {
        if (str === "取消") {
            isShowDialog()
        } else {
            if (val && num || mes && message) {
                isShowDialog()
            } else {
                alert("请输入内容")
            }

        }
    }
    return (
        <div className={styles.dialog}>
            {title === "新添成绩-xx同学" ? <div className={styles.diform}>

                <h3>{title}</h3>
                <p htmlFor="">
                    <DatePicker onChange={onChange} /><button className={styles.yesterday}>昨天</button>
                </p>
                <p htmlFor="">
                    技能 <input type="text" value={val} onChange={getval} />
                </p>
                <p htmlFor="">
                    理论 <input type="text" value={num} onChange={getnum} />
                </p>
                <div className={styles.bot}>

                    <button className={styles.clear} onClick={() => clickMethod("取消")}>取消</button>
                    <button className={styles.sure} onClick={() => clickMethod("确定")}>确定</button>

                </div>
            </div> : <div className={styles.diform}>
                    <h3>{title}</h3>
                    <p htmlFor="">
                        <DatePicker onChange={onChange} /><button className={styles.yesterday}>昨天</button>
                    </p>
                    <p htmlFor="">
                        分析
                    <textarea name="" id="" className={styles.text} value={mes} onChange={getMes}></textarea>
                    </p>
                    <p htmlFor="">
                        解决方案
                    <textarea name="" id="" className={styles.text} value={message} onChange={getMessage}></textarea>
                    </p>
                    <div className={styles.bot}>
                        <button className={styles.clear} onClick={() => clickMethod("取消")}>取消</button>
                        <button className={styles.sure} onClick={() => clickMethod("确定")}>确定</button>
                    </div>
                </div>}
        </div>
    )
}
export default Dialog
