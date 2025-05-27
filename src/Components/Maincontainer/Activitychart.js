import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { activityData } from '../../constant';


const ActivityChart = () => {
  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <BarChart
          data={activityData}
          margin={{ top: 20, right: 5, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Bar dataKey="value1" fill="#1ccfc9" barSize={8} radius={[10, 10, 0, 0]} />
          <Bar dataKey="value2" fill="#5063ff" barSize={8} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
