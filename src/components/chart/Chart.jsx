import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = () => {
    const data = [
       {
        total: 1000,
        name: 'Jun'
       },
       {
        total: 900,
        name: 'Feb'
       },
       {
        total: 111,
        name: 'Mar'
       }
      ];

  return (
    <div className='chart'>
        <div className="title">Last 6month revenue</div>
        <ResponsiveContainer width="100%" aspect={2 / 1.3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart