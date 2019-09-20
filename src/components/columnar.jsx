import React,{useEffect} from 'react'
import echarts from 'echarts';
const option = {
    title : {
        text: 'xx同学的日周考考试成绩图',
        subtext: '仅供参考'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['技能','理论']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data: ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-09','08-10','08-11','08-12','08-12']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'理论分数',
            type:'bar',
            data:[22,60, 82.1,21, 25,26,70,82.2, 20,52,20,23],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },{
            name:'技能分数',
            type:'bar',
            data:[23,64, 70,21.5,23 ,76.7,40,60, 39,20,10,0],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};
 function Columnar() {
    useEffect(() => {
        var myChart = echarts.init(document.getElementById('pies'));
        // 绘制图表
        myChart.setOption(option);
      })

    return (
        <div id="pies"></div>
    )
}
export default Columnar