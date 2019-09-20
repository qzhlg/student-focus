import React,{  useEffect} from 'react';
import { connect } from 'dva';
import styles from './indexPresident.css'

import echarts from 'echarts';
function President(){
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'XX同学的日周考统计图',
        subtext: '仅供参考'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['技能', '理论']
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} '
        }
      },
      series: [
        {
          name: '技能',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        },
        {
          name: '理论',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' },
              [{
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              }, {
                symbol: 'circle',
                label: {
                  normal: {
                    position: 'start',
                    formatter: '最大值'
                  }
                },
                type: 'max',
                name: '最高点'
              }]
            ]
          }
        }
      ]
    })

  })
    return (
        <div className={styles.President}>
           <div className={styles.box}>
           重点关注学生考试成绩统计图
           </div>
           <div className={styles.top}>
               <div className={styles.count}>
                   <p>选择班级：</p>
                   <span>1703D</span>
                   <span>1704A</span>
                   <span>1704B</span>
                   <span>1704C</span>
               </div>
               <div>名单：</div>
           </div>
          <div>
          <div id="main" style={{ width: '100%', height: '500px' }}></div>

          </div>
        <div className={styles.record }>
          <div className={styles.readOnly}>
            <div>2019-08-30</div>
            <div>今日分析及解决方案：</div>
            <div>点击查看历史记录</div>
          </div>
          <div className={styles.restore}>
            <span>撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好
</span>
          </div>
        </div>
        </div>
    )
}


President.propTypes = {
};
export default connect()(President)