import React, { useState } from 'react'
import { DatePicker, Button } from 'antd';
import styles from './dialog.css'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function Dialog(props) {
    const [index,setIndex]=useState(0)
    console.log(props)
    const { title, isShowDialog } = props
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    const clickMethod=(str)=>{
        if(str==="取消"){
            setIndex(0)
            isShowDialog()
        }else{
            setIndex(1)
            isShowDialog()
        }
    }   
    return (
        <div className={styles.dialog}>
            {title ? <div className={styles.diform}>
                
                <h3>{title}</h3>
                <p htmlFor="">
                    <DatePicker onChange={onChange} /><button className={styles.yesterday}>昨天</button>
                </p>
                <p htmlFor="">
                    技能 <input type="number" />
                </p>
                <p htmlFor="">
                    理论 <input type="text" />
                </p>
                <div className={styles.bot}>
                 
                        <button className={styles.clear} onClick={()=>clickMethod("取消")}>取消</button>
                        <button className={styles.sure}   onClick={()=>clickMethod("确定")}>确定</button>
                  
                </div>
             </div> : <div className={styles.diform}>
             <h3>{title}</h3>
                    <p htmlFor="">
                        <DatePicker onChange={onChange} /><button className={styles.yesterday}>昨天</button>
                    </p>
                    <label htmlFor="">
                        分析
                    <textarea name="" id="" className={styles.text}></textarea>
                    </label>
                    <label htmlFor="">
                        解决方案
                    <textarea name="" id="" className={styles.text}></textarea>
                    </label>
                    <div className={styles.bot}>
                        <button className={styles.clear}>取消</button>
                        <button className={styles.sure}>确定</button>
                    </div>
                </div>}
        </div>
    )
}
export default Dialog
