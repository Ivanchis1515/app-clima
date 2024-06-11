import React from 'react'

//i,portacion de la libreria de echarts apache
import ReactECharts from 'echarts-for-react';

const LineCharts = () => {
    //parametros de la grafica como objeto
    const option = {
        //parametros de x
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    return (
        <>
            <ReactECharts option={ option } />
        </>
    )
}

export default LineCharts
