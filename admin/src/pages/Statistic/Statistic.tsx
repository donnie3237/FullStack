import React from 'react'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    scales,
    PointElement,
    LineElement
} from 'chart.js'
import {Line , Pie , Bar} from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    scales,
    PointElement,
    LineElement
)
function Statistic() {
    const options: any ={
        responsive: true
    }
    const data = {
        labels: [2020,2021,2022,2023],
        datasets:[
            {
            label:"test",
            data:[2,3,4,5],
            borderColor:"white",
            borderWidth:1
            }
        ]
    }
  return (
    <div>Statistic
        <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default Statistic