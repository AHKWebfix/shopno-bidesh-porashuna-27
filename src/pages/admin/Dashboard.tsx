
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Eye, Edit, Plus, Users, TrendingUp, Clock, CheckCircle, LayoutDashboard, UserCheck, Settings, LogOut, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration with new countries
  const leads = [
    {
      id: 1,
      name: 'আহমেদ রহমান',
      mobile: '০১৭১২৩৪৫৬৭৮',
      email: 'ahmed@example.com',
      country: 'অস্ট্রেলিয়া',
      status: 'নতুন',
      date: '২০২৪-০১-১৫',
      assignedTo: 'রহিম আলী'
    },
    {
      id: 2,
      name: 'ফাতিমা খান',
      mobile: '০১৮১২৩৪৫৬৭৮',
      email: 'fatima@example.com',
      country: 'যুক্তরাজ্য',
      status: 'যোগাযোগ করা হয়েছে',
      date: '২০২৪-০১-১৪',
      assignedTo: 'সারা বেগম'
    },
    {
      id: 3,
      name: 'মোহাম্মদ আলী',
      mobile: '০১৯১২৩৪৫৬৭৮',
      email: 'ali@example.com',
      country: 'মালয়েশিয়া',
      status: 'ফলো-আপ',
      date: '২০২৪-০১-১৩',
      assignedTo: 'করিম হোসেন'
    },
    {
      id: 4,
      name: 'তানিয়া আক্তার',
      mobile: '০১৬১২৩৪৫৬৭৮',
      email: 'tania@example.com',
      country: 'নিউজিল্যান্ড',
      status: 'রূপান্তরিত',
      date: '২০২৪-০১-১২',
      assignedTo: 'নাসির উদ্দিন'
    }
  ];

  const stats = {
    total: 186,
    new: 34,
    contacted: 67,
    converted: 23,
    followUp: 62
  };

  const countryStats = [
    { country: 'অস্ট্রেলিয়া', count: 45, percentage: 24 },
    { country: 'যুক্তরাজ্য', count: 52, percentage: 28 },
    { country: 'মালয়েশিয়া', count: 38, percentage: 20 },
    { country: 'নিউজিল্যান্ড', count: 29, percentage: 16 },
    { country: 'অন্যান্য', count: 22, percentage: 12 }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'নতুন': return 'default';
      case 'যোগাযোগ করা হয়েছে': return 'secondary';
      case 'ফলো-আপ': return 'outline';
      case 'রূপান্তরিত': return 'destructive';
      default: return 'default';
    }
  };

  const sidebarItems = [
    {
      title: "ড্যাশবোর্ড",
      icon: LayoutDashboard,
      url: "/admin/dashboard",
      isActive: true,
    },
    {
      title: "লিড ম্যানেজার",
      icon: UserCheck,
      url: "/admin/lead-manager",
    },
    {
      title: "ওয়েবসাইট ম্যানেজমেন্ট",
      icon: Globe,
      url: "/admin/website-management",
    },
    {
      title: "সেটিংস",
      icon: Settings,
      url: "/admin/settings",
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen font-bangla bg-gray-50 w-full flex">
        <Sidebar>
          <SidebarHeader className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">অ্যাডমিন প্যানেল</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-4">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button 
                      onClick={() => navigate(item.url)}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 w-full text-left ${
                        item.isActive ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button 
                    onClick={() => navigate('/admin/login')} 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 w-full text-left text-red-600"
                  >
                    <LogOut size={20} />
                    <span className="font-medium">লগ আউট</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          {/* Header */}
          <div className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger />
                  <h1 className="text-2xl font-bold text-gray-800">অ্যাডমিন ড্যাশবোর্ড</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Users size={16} className="mr-2" />
                    মোট লিড
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-blue">{stats.total}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Plus size={16} className="mr-2" />
                    নতুন
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.new}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Clock size={16} className="mr-2" />
                    যোগাযোগ করা হয়েছে
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <TrendingUp size={16} className="mr-2" />
                    ফলো-আপ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{stats.followUp}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <CheckCircle size={16} className="mr-2" />
                    রূপান্তরিত
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{stats.converted}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Leads Table */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>লিড তালিকা</CardTitle>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                          <Input
                            placeholder="লিড খুঁজুন..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          <Filter size={16} className="mr-2" />
                          ফিল্টার
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download size={16} className="mr-2" />
                          এক্সপোর্ট
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">নাম</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">মোবাইল</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">দেশ</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">স্ট্যাটাস</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">লিড ম্যানেজার</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">অ্যাকশন</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leads.map((lead) => (
                            <tr key={lead.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 font-medium">{lead.name}</td>
                              <td className="py-3 px-4">{lead.mobile}</td>
                              <td className="py-3 px-4">{lead.country}</td>
                              <td className="py-3 px-4">
                                <Badge variant={getStatusBadgeVariant(lead.status)}>
                                  {lead.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-600">{lead.assignedTo}</td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => navigate(`/admin/lead/${lead.id}`)}
                                  >
                                    <Eye size={16} />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit size={16} />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Country Stats Sidebar */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>দেশভিত্তিক লিড</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {countryStats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-700">{stat.country}</span>
                              <span className="text-sm text-gray-500">{stat.count}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-brand-blue h-2 rounded-full" 
                                style={{ width: `${stat.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>দ্রুত অ্যাকশন</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      নতুন লিড ম্যানেজার যোগ করুন
                    </Button>
                    <Button className="w-full" variant="outline">
                      বাল্ক ইমেইল পাঠান
                    </Button>
                    <Button className="w-full" variant="outline">
                      রিপোর্ট জেনারেট করুন
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
