
import React from 'react';
import { Users, UserCheck, UserX, FileText, TrendingUp, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Leads Submitted',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Leads Contacted',
      value: '892',
      change: '+8%',
      changeType: 'increase',
      icon: UserCheck,
      color: 'bg-green-500',
    },
    {
      title: 'Leads Not Contacted',
      value: '234',
      change: '-5%',
      changeType: 'decrease',
      icon: UserX,
      color: 'bg-yellow-500',
    },
    {
      title: 'File Open Status',
      value: '156',
      change: '+15%',
      changeType: 'increase',
      icon: FileText,
      color: 'bg-purple-500',
    },
  ];

  const recentLeads = [
    { name: 'Ahmed Rahman', country: 'Canada', status: 'Contacted', date: '2024-01-15' },
    { name: 'Fatima Khan', country: 'Australia', status: 'File Open', date: '2024-01-14' },
    { name: 'Mohammad Ali', country: 'UK', status: 'Pending', date: '2024-01-14' },
    { name: 'Rashida Begum', country: 'USA', status: 'Contacted', date: '2024-01-13' },
    { name: 'Karim Hassan', country: 'Germany', status: 'File Open', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your lead management system</p>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-GB', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className={`w-4 h-4 mr-1 ${
                    stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                  }`} />
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Leads Chart (Placeholder) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Leads Trend</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-sm text-gray-400">Monthly leads submission trend</p>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Leads</h3>
          <div className="space-y-4">
            {recentLeads.map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.country}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    lead.status === 'File Open' ? 'bg-green-100 text-green-800' :
                    lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {lead.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{lead.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
