
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LeadTrendsChart = () => {
  const data = [
    { month: 'Jan', leads: 65 },
    { month: 'Feb', leads: 78 },
    { month: 'Mar', leads: 92 },
    { month: 'Apr', leads: 85 },
    { month: 'May', leads: 103 },
    { month: 'Jun', leads: 127 },
    { month: 'Jul', leads: 145 },
    { month: 'Aug', leads: 134 },
    { month: 'Sep', leads: 158 },
    { month: 'Oct', leads: 172 },
    { month: 'Nov', leads: 189 },
    { month: 'Dec', leads: 195 }
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px' 
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="leads" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeadTrendsChart;
