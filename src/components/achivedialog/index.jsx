import React,{useState} from 'react'
import styles from './index.css'
 function Achievment(props) {
     const [index,setIndex]=useState(0)
    console.log(props)
    const {title,showDialog}=props
    
    // 点击按钮
    const clickMethod=(str)=>{
        if(str==="取消"){
            setIndex(0)
           showDialog(false)
        }else{
            setIndex(1)
        }
    }
    // const controlMethod=()=>{
        
    // }
    return (
        <div className={styles.achivebox}>
            
            {title?<div className={styles.achiveform}>
                <h2>{title}</h2>
                <p>
                    理论 <input type="text" placeholder="0-100之间数字"/>
                </p>
                <p>
                    技能 <input type="text" placeholder="0-100之间数字"/>
                </p>
               <p>
               <span>日考
                   <input type="checkbox"/>
               </span>
                <span>周考
                    <input type="checkbox"/>
                </span>
               </p>
              <p>
             <label htmlFor="">
             分析解决方案
             <textarea name="" id="" className={styles.text}></textarea>
             </label>
              </p>
           <div className={styles.btn}>
          < button className={styles.delete} className={index===0?'active':''} onClick={()=>clickMethod("取消")}>取消</button>
            <button className={styles.sure} className={index===1?'active':''} onClick={()=>clickMethod("确定")}>确定</button>
           </div>
           
           
            </div>:<div className={styles.achiveform}>
                <h2>你确定删除吗？</h2>
                <div className={styles.btn}>
                <button className={styles.delete} className={index===0?'active':''} onClick={()=>clickMethod("取消")}>取消</button>
                <button className={styles.sure} className={index===1?'active':''} onClick={()=>clickMethod("确定")}>确定</button>
                </div>
            </div>}
        </div>
    )
}
export default Achievment