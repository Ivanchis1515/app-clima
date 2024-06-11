import React from 'react'

//i,portacion de la libreria de echarts apache
import ReactECharts from 'echarts-for-react';

const LineCharts = ({ temperaturas, fechas, titulo }) => {
    //parametros de la grafica como objeto
    const option = {
        //titulo a la barra
        title:{
            text:titulo
        },
        //parametros de x
        xAxis: {
            type: 'category',
            data: fechas
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: temperaturas,
                type: 'line',
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine:{
                    data: [{ type: 'average', name: 'Avg' }]
                },
                label:{
                    show:true,
                    position: 'top'
                }
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

//si el desarrollador no le pasa parametros al componente muestra automticamente estas etiquetas
LineCharts.defaultProps = {
    fechas: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    temperaturas: [150, 230, 224, 218, 135, 147, 260],
    titulo: "Temperature Change in the Coming Week"
}