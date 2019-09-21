import React,{useState} from 'react'
import { DatePicker,Button } from 'antd';
import styles from './dialog.css'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function Dialog() {
    const onChange=(date, dateString) =>{
        console.log(date, dateString);
      }
    return (
        <div className={styles.dialog}>
            <div className={styles.diform}>
                
                <div className={styles.top}></div>
                <p htmlFor="">
                <DatePicker onChange={onChange} /><button className={styles.yesterday}>昨天</button>
                </p>
                <p htmlFor="">
                    技能 <input type="number"/>
                </p>
                <p htmlFor="">
                    理论 <input type="text"/>
                </p>
                <div className={styles.bot}>
                    <button className={styles.clear}>取消</button>
                    <button className={styles.sure}>确定</button>
                </div>
            </div>
        </div>
    )
}
export default Dialog
