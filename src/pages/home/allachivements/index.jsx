import React,{useEffect} from 'react'
import styles from './index.css'
import Mock from 'mockjs'
import Table from '../../../components/table'
const data=Mock.mock({
    "list|4":[
        {
            "id|+1": 1,
            "num|+1": 1,
            name: "@FIRST",
            time: '@date(yyyy-MM-dd)',
            'number|1-100': 100,
            "money|100-900": 1,
            domain:'@cparagraph(2)',
            test:'@last()',
            "boolean|1": true,
            operation: [ "编辑", "删除"]
          }
    ]
})


const newdata=data.list
function Allachivement() {
    useEffect(()=>{
    })
    return (
        <div className={styles.all}>
            <div className={styles.head}>
                xx学生日周考试成绩表
            </div>

            <div className={styles.tabmain}>
                <div className={styles.tabnav}>
                  <div className={styles.tabnavleft}>
                    <span>讲师xx</span>
                    <span>学生xx</span>
                  </div>
                  <div className={styles.tabnavright}>
                    <input type="text" placeholder="快捷选择其他学生"/>
                  </div>
                </div>
                <div className={styles.content}>
                    <Table newdata={newdata}></Table>
                </div>
            </div>
        </div>
    )
}
export default Allachivement