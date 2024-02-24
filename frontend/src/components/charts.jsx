import React from 'react'
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

export const Charts = () => {
  return (
    <Line
    redraw="true"
    data={{
      labels: ["2021", "2022", "2023","2024"],
      datasets: [
        { label: "Facebook", data: [200, 320, 450,1000] },
        { label: "Instagram", data: [100, 330, 400,1200] },
        { label: "Twitter", data: [100, 350, 800,900] },
        { label: "Youtube", data: [210, 370, 900,1000] },
      ],
    }} />
  )
}
