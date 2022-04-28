import React from 'react';
import { Line, LineChart, XAxis, CartesianGrid, YAxis, Tooltip, AreaChart, ResponsiveContainer, Area, BarChart, Bar, PieChart, Pie } from 'recharts';
import useChartData from '../../Hooks/useChartData';

const Dashboard = () => {
    const [chart, setChart] = useChartData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mt-28 md:px-24 px-6'>
            <div className="chartOne  h-[300px]  border-2 rounded-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={600} height={250} data={chart}>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="investment" stroke="#34495e" fill="#34495e" />
                        <Line type="monotone" dataKey="sell" stroke="#e67e22" fill="#e67e22" />
                        <Line type="monotone" dataKey="revenue" stroke="#27ae60" fill="#27ae60" />
                        <Tooltip />
                        <Tooltip />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>

            </div>
            <div className="chartOne  h-[300px]  border-2 rounded-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500} className='w-full' height={250} data={chart}>

                        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="investment" stroke="#34495e" fill="#34495e" />
                        <Area type="monotone" dataKey="sell" stroke="#e67e22" fill="#e67e22" />
                        <Area type="monotone" dataKey="revenue" stroke="#27ae60" fill="#27ae60" />
                        <Tooltip />
                        <Tooltip />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="chartOne h-[300px]  border-2 rounded-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={250} data={chart}>
                        <Bar dataKey="investment" fill="#34495e" />
                        <Bar dataKey="sell" fill="#e67e22" />
                        <Bar dataKey="revenue" fill="#27ae60" />
                        <Tooltip />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="chartOne  h-[300px]  border-2 rounded-xl p-4 ">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={chart} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />

                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;