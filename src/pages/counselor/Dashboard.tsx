import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Clock, CheckCircle, MessageSquare, Calendar, LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const CounselorDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [newNote, setNewNote] = useState('');

  const myLeads = [
    {
      id: 1,
      name: 'আহমেদ রহমান',
      mobile: '০১৭১২৩৪৫৬৭৮',
      email: 'ahmed@example.com',
      country: 'অস্ট্রেলিয়া',
      status: 'নতুন',
      date: '২০২৪-০১-১৫',
      lastContact: '২০২৪-০১-১৪',
      notes: 'IELTS স্কোর প্রয়োজন'
    },
    {
      id: 2,
      name: 'ফাতিমা খান',
      mobile: '০১৮১২৩৪৫৬৭৮',
      email: 'fatima@example.com',
      country: 'যুক্তরাজ্য',
      status: 'যোগাযোগ করা হয়েছে',
      date: '২০২৪-০১-১৪',
      lastContact: '২০২৪-০১-১৩',
      notes: 'ডকুমেন্ট সংগ্রহ করছেন'
    },
    {
      id: 3,
      name: 'মোহাম্মদ আলী',
      mobile: '০১৯১২৩৪৫৬৭৮',
      email: 'ali@example.com',
      country: 'মালয়েশিয়া',
      status: 'ফলো-আপ',
      date: '২০২৪-০১-১৩',
      lastContact: '২০২৪-০১-১২',
      notes: 'আগামী সপ্তাহে কল করতে হবে'
    }
  ];

  const stats = {
    assigned: 12,
    contacted: 8,
    converted: 3,
    pending: 4
  };

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
      url: "#",
    },
    {
      title: "আমার লিড",
      icon: Users,
      url: "#",
    },
    {
      title: "সেটিংস",
      icon: Settings,
      url: "#",
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen font-bangla bg-gray-50 w-full flex">
        <Sidebar>
          <SidebarHeader className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">লিড ম্যানেজার প্যানেল</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-4">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                      <item.icon size={20} />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button 
                    onClick={() => navigate('/counselor/login')} 
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
                  <h1 className="text-2xl font-bold text-gray-800">লিড ম্যানেজার ড্যাশবোর্ড</h1>
                </div>
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
                    বরাদ্দকৃত লিড
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-blue">{stats.assigned}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Clock size={16} className="mr-2" />
                    যোগাযোগ সম্পন্ন
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.contacted}</div>
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
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    অপেক্ষমাণ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
                </CardContent>
              </Card>
            </div>

            {/* My Leads Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>আমার বরাদ্দকৃত লিড</CardTitle>
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
                        <th className="text-left py-3 px-4 font-medium text-gray-600">শেষ যোগাযোগ</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">নোট</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">অ্যাকশন</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myLeads.map((lead) => (
                        <tr key={lead.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{lead.name}</td>
                          <td className="py-3 px-4">{lead.mobile}</td>
                          <td className="py-3 px-4">{lead.country}</td>
                          <td className="py-3 px-4">
                            <Badge variant={getStatusBadgeVariant(lead.status)}>
                              {lead.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{lead.lastContact}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{lead.notes}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <MessageSquare size={16} />
                              </Button>
                              <Select>
                                <SelectTrigger className="w-32">
                                  <SelectValue placeholder="স্ট্যাটাস" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">নতুন</SelectItem>
                                  <SelectItem value="contacted">যোগাযোগ করা হয়েছে</SelectItem>
                                  <SelectItem value="followup">ফলো-আপ</SelectItem>
                                  <SelectItem value="converted">রূপান্তরিত</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>নোট যোগ করুন</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="লিড নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        {myLeads.map((lead) => (
                          <SelectItem key={lead.id} value={lead.id.toString()}>
                            {lead.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Textarea 
                      placeholder="নোট লিখুন..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                    />
                    <Button className="w-full">নোট সংরক্ষণ করুন</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>আজকের কাজ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm">৩টি ফলো-আপ কল</span>
                      <Badge variant="outline">আজ</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm">২টি ডকুমেন্ট চেক</span>
                      <Badge variant="outline">আগামীকাল</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">১টি ভিসা আপডেট</span>
                      <Badge variant="outline">এই সপ্তাহে</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CounselorDashboard;
