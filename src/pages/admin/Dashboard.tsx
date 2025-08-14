
import React, { useState } from 'react';
import { Users, UserCheck, UserX, FileText, TrendingUp, Calendar, Filter } from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import LeadTrendsChart from '@/components/admin/LeadTrendsChart';

const Dashboard = () => {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

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
    { name: 'Ahmed Rahman', country: 'Australia', status: 'Contacted', date: '2024-01-15' },
    { name: 'Fatima Khan', country: 'Malaysia', status: 'File Open', date: '2024-01-14' },
    { name: 'Mohammad Ali', country: 'UK', status: 'Pending', date: '2024-01-14' },
    { name: 'Rashida Begum', country: 'New Zealand', status: 'Contacted', date: '2024-01-13' },
    { name: 'Karim Hassan', country: 'Australia', status: 'File Open', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-4"> {/* Reduced spacing */}
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1> {/* Reduced from text-3xl */}
          <p className="text-gray-600 mt-0.5 text-sm">Overview of your lead management system</p> {/* Reduced margin and font size */}
        </div>
        <div className="flex items-center space-x-2"> {/* Reduced space */}
          <Calendar className="w-4 h-4 text-gray-500" /> {/* Reduced size */}
          <span className="text-xs text-gray-600"> {/* Reduced font size */}
            {new Date().toLocaleDateString('en-GB', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Date Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"> {/* Reduced padding */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-3"> {/* Reduced spacing */}
          <h3 className="text-base font-semibold text-gray-900">Lead Overview Filter</h3> {/* Reduced font size */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3"> {/* Reduced spacing */}
            <div className="flex items-center space-x-1.5"> {/* Reduced space */}
              <Filter className="w-3.5 h-3.5 text-gray-500" /> {/* Reduced size */}
              <span className="text-xs text-gray-600">Custom Date Range:</span> {/* Reduced font size */}
            </div>
            <div className="flex flex-col space-y-1.5 w-full sm:flex-row sm:space-y-0 sm:space-x-1.5 sm:w-auto"> {/* Reduced spacing */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto justify-start text-left font-normal text-xs py-1.5 px-2.5" /* Reduced font size and padding */
                  >
                    <Calendar className="mr-1.5 h-3 w-3" /> {/* Reduced size and margin */}
                    {dateFrom ? format(dateFrom, "PPP") : "From date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto justify-start text-left font-normal text-xs py-1.5 px-2.5" /* Reduced font size and padding */
                  >
                    <Calendar className="mr-1.5 h-3 w-3" /> {/* Reduced size and margin */}
                    {dateTo ? format(dateTo, "PPP") : "To date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              <Button 
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-xs py-1.5 px-2.5" /* Reduced font size and padding */
                onClick={() => {
                  // Filter logic would go here
                  console.log('Filtering from', dateFrom, 'to', dateTo);
                }}
              >
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"> {/* Reduced padding */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 mb-1.5">{stat.title}</p> {/* Reduced font size and margin */}
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p> {/* Reduced from text-3xl */}
                <div className="flex items-center mt-1.5"> {/* Reduced margin */}
                  <TrendingUp className={`w-3 h-3 mr-1 ${ /* Reduced size */
                    stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                  }`} />
                  <span className={`text-xs font-medium ${ /* Reduced font size */
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-2.5 rounded-lg`}> {/* Reduced padding */}
                <stat.icon className="w-5 h-5 text-white" /> {/* Reduced size */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {/* Reduced gap */}
        {/* Monthly Leads Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"> {/* Reduced padding */}
          <h3 className="text-base font-semibold text-gray-900 mb-3">Monthly Leads Trend</h3> {/* Reduced font size and margin */}
          <LeadTrendsChart />
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"> {/* Reduced padding */}
          <h3 className="text-base font-semibold text-gray-900 mb-3">Recent Leads</h3> {/* Reduced font size and margin */}
          <div className="space-y-3"> {/* Reduced spacing */}
            {recentLeads.map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg"> {/* Reduced padding */}
                <div className="flex items-center space-x-2.5"> {/* Reduced space */}
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"> {/* Reduced size */}
                    <span className="text-white font-medium text-xs"> {/* Reduced font size */}
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{lead.name}</p> {/* Reduced font size */}
                    <p className="text-xs text-gray-500">{lead.country}</p> {/* Reduced font size */}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-1.5 py-0.5 text-xs font-medium rounded-full ${ /* Reduced padding */
                    lead.status === 'File Open' ? 'bg-green-100 text-green-800' :
                    lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {lead.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">{lead.date}</p> {/* Reduced margin */}
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
