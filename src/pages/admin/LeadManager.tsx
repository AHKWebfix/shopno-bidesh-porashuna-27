
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Download, Eye, Edit, Plus, Users, Phone, Mail, MapPin, Calendar, LayoutDashboard, UserCheck, Settings, LogOut, Globe, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const LeadManager = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const leadManagers = [
    {
      id: 1,
      name: 'রহিম আলী',
      email: 'rahim@mheducation.com',
      phone: '০১৭১২৩৪৫৬৭৮',
      role: 'সিনিয়র লিড ম্যানেজার',
      assignedLeads: 23,
      convertedLeads: 12,
      status: 'সক্রিয়',
      joinDate: '২০২৩-০৬-১৫',
      lastLogin: '২০২৪-০১-১৫'
    },
    {
      id: 2,
      name: 'সারা বেগম',
      email: 'sara@mheducation.com',
      phone: '০১৮১২৩৪৫৬৭৮',
      role: 'লিড ম্যানেজার',
      assignedLeads: 18,
      convertedLeads: 9,
      status: 'সক্রিয়',
      joinDate: '২০২৩-০৮-২২',
      lastLogin: '২০২৪-০১-১৪'
    },
    {
      id: 3,
      name: 'করিম হোসেন',
      email: 'karim@mheducation.com',
      phone: '০১৯১২৩৪৫৬৭৮',
      role: 'জুনিয়র লিড ম্যানেজার',
      assignedLeads: 15,
      convertedLeads: 7,
      status: 'সক্রিয়',
      joinDate: '২০২৩-১০-১০',
      lastLogin: '২০২৪-০১-১৩'
    },
    {
      id: 4,
      name: 'নাসির উদ্দিন',
      email: 'nasir@mheducation.com',
      phone: '০১৬১২৩৪৫৬৭৮',
      role: 'লিড ম্যানেজার',
      assignedLeads: 20,
      convertedLeads: 11,
      status: 'নিষ্ক্রিয়',
      joinDate: '২০২৩-০৫-০৮',
      lastLogin: '২০২৩-১২-২০'
    }
  ];

  const sidebarItems = [
    {
      title: "ড্যাশবোর্ড",
      icon: LayoutDashboard,
      url: "/admin/dashboard",
    },
    {
      title: "লিড ম্যানেজার",
      icon: UserCheck,
      url: "/admin/lead-manager",
      isActive: true,
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

  const getStatusBadgeVariant = (status: string) => {
    return status === 'সক্রিয়' ? 'default' : 'secondary';
  };

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
                  <h1 className="text-2xl font-bold text-gray-800">লিড ম্যানেজার</h1>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus size={16} className="mr-2" />
                  নতুন লিড ম্যানেজার যোগ করুন
                </Button>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Users size={16} className="mr-2" />
                    মোট লিড ম্যানেজার
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-blue">{leadManagers.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <UserCheck size={16} className="mr-2" />
                    সক্রিয়
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {leadManagers.filter(m => m.status === 'সক্রিয়').length}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    নিষ্ক্রিয়
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">
                    {leadManagers.filter(m => m.status === 'নিষ্ক্রিয়').length}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Users size={16} className="mr-2" />
                    মোট লিড
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    {leadManagers.reduce((total, manager) => total + manager.assignedLeads, 0)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lead Managers Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>লিড ম্যানেজার তালিকা</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        placeholder="লিড ম্যানেজার খুঁজুন..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="স্ট্যাটাস" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">সব</SelectItem>
                        <SelectItem value="সক্রিয়">সক্রিয়</SelectItem>
                        <SelectItem value="নিষ্ক্রিয়">নিষ্ক্রিয়</SelectItem>
                      </SelectContent>
                    </Select>
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
                        <th className="text-left py-3 px-4 font-medium text-gray-600">যোগাযোগ</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">ভূমিকা</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">লিড</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">কনভার্ট</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">স্ট্যাটাস</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">শেষ লগইন</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">অ্যাকশন</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadManagers.map((manager) => (
                        <tr key={manager.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-medium">
                                  {manager.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <div className="font-medium">{manager.name}</div>
                                <div className="text-sm text-gray-500">ID: {manager.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center text-sm">
                                <Phone size={12} className="mr-1 text-gray-400" />
                                {manager.phone}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Mail size={12} className="mr-1 text-gray-400" />
                                {manager.email}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{manager.role}</td>
                          <td className="py-3 px-4">
                            <span className="text-lg font-semibold text-blue-600">
                              {manager.assignedLeads}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-lg font-semibold text-green-600">
                              {manager.convertedLeads}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={getStatusBadgeVariant(manager.status)}>
                              {manager.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar size={12} className="mr-1 text-gray-400" />
                              {manager.lastLogin}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 size={16} />
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default LeadManager;
