import React, { useState } from 'react'
import styles from '../pages/home/allachivements/index.css'
import Achievment from './achivedialog/index'
function Table(props) {
  const [isShow, setShow] = useState(Boolean)
  const [title, setTitle] = useState(0)

  const { newdata } = props

  const isShowDialog = (bool) => {
    setShow(false)
  }

  const showDialog = (str) => {
    if (str === "编辑") {
      setShow(true)
      setTitle("编辑内容")
    } else if (str === "删除") {
      setShow(true)
      setTitle("删除")
    }
  }
  return (
    <table className={styles.content}>
      <tr className={styles.title}>
        <th>序号</th>
        <th>日期</th>
        <th>理论</th>
        <th>技能</th>
        <th>分析和解决</th>
        <th>是否周考</th>
        <th>操作</th>
      </tr>
      {newdata.length && newdata.map(item => <tr key={item.id}>
        <td>{item.num}</td>
        <td>{item.time}</td>
        <td>{item.number}</td>
        <td>{item.name}</td>
        <td>{item.domain}</td>
        <td>是</td>
        <td>
          <a onClick={() => showDialog("编辑")}>编辑</a>
          &nbsp;&nbsp;
            <a onClick={() => showDialog("删除")}>删除</a>
        </td>
      </tr>)}
      {isShow ? <Achievment isShow={isShow} title={title} isShowDialog={isShowDialog} /> : ''}
    </table>
  )
}
export default Table
