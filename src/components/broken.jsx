import React, { useEffect } from 'react'
import echarts from 'echarts';
const option = {
    title: {
        text: 'xx同学的日周考考试成绩图',
        subtext: '仅供参考'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['理论', '技能']
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
        data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-09', '08-10', '08-11', '08-12', '08-12']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 分'
        }
    },
    series: [
        {
            name: '理论分数',
            type: 'line',
            data: [22, 60, 82.1, 21, 25, 26, 70, 82.2, 20, 52, 20, 23],
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
        }, {
            name: '技能分数',
            type: 'line',
            data: [23, 64, 70, 21.5, 23, 76.7, 40, 60, 39, 20, 10, 0],
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
        }
    ]
};
function Broken() {
    useEffect(() => {
        var myChart = echarts.init(document.getElementById('pie'));
        // 绘制图表
        myChart.setOption(option);
    })

    return (
        <div id="pie"></div>
    )
}
export default Broken