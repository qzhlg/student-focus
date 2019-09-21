import React, { useState, useEffect } from 'react'
import { Switch } from 'antd';
import styles from './index.css'
import 'antd/dist/antd.css'
import Broken from '../../../components/broken'
import Columnar from '../../../components/columnar'
import Center from '../../../components/center'

function Visual(props) {
    const [index, setIndex] = useState(0)
  const  onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

    return (
        <div className={styles.visual}>

            <div className={styles.topvisual}>
                重点关注学生考试成绩统计图
            </div>
            <div className={styles.visualmain} >
                <div className={styles.nav}>
                    <div className={styles.navleft}>
                        <span>切换班级</span>
                        <span>
                            <button className={index === 0 ? 'navactive' : ''} onClick={() => setIndex(0)}>1703C</button>
                        </span>
                        <span>
                            <button className={index === 1 ? 'navactive' : ''} onClick={() => setIndex(1)}>1703E</button>
                        </span>
                        <span>
                            <button className={index === 2 ? 'navactive' : ''} onClick={() => setIndex(2)}>1703E</button>
                        </span>
                        <span>
                            <button className={index === 3 ? 'navactive' : ''} onClick={() => setIndex(3)}>创建班级</button>
                        </span>
                    </div>
                    <div className={styles.navright}>
                        <Switch defaultChecked  onChange={onChange} style={{width: '10%',float:'right'}}/>
                        <span>柱形图</span>
                        <span>线图/</span>
                    </div>

                </div>
                <div className={styles.navbot}>
                    <label htmlFor="">
                        添加学生 <input type="text" name="" id="" placeholder="输入姓名" />
                    </label>
                    <label htmlFor="">
                        <input type="text" name="" id="" placeholder="末尾次数" />
                    </label>
                    <label htmlFor="">
                        <input type="text" name="" id="" placeholder="结对子 帮扶对象" />
                    </label>
                    <label htmlFor="">
                        <button className={styles.add}>添加</button>
                    </label>
                </div>

                <Broken></Broken>
                <Center></Center>
                <Columnar></Columnar>
                <Center></Center>
            </div>

        </div>
    )
}
export default Visual