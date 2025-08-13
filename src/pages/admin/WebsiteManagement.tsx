import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, LayoutDashboard, UserCheck, Settings, LogOut, Globe, Home, Users, FileText, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const WebsiteManagement = () => {
  const navigate = useNavigate();
  
  const [homeContent, setHomeContent] = useState({
    heroTitle: 'বিদেশে পড়াশোনা এখন আরও সহজ!',
    heroSubtitle: 'অস্ট্রেলিয়া, যুক্তরাজ্য, মালয়েশিয়া, নিউজিল্যান্ডে ভর্তি ও ভিসা সাপোর্ট',
    heroDescription: 'পান ১০০% ফ্রি পরামর্শ ও সম্পূর্ণ সাপোর্ট',
  });

  const [aboutContent, setAboutContent] = useState({
    aboutTitle: 'আমাদের সম্পর্কে',
    aboutDescription: 'BEGL Education একটি নির্ভরযোগ্য শিক্ষা পরামর্শ প্রতিষ্ঠান...',
    missionStatement: 'আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীর স্বপ্ন পূরণে সহায়তা করা।',
  });

  const [contactContent, setContactContent] = useState({
    address: 'ঢাকা, বাংলাদেশ',
    phone: '+৮৮০ ১৭xxxxxxxx',
    email: 'info@begleducation.com',
    workingHours: 'সকাল ৯টা - সন্ধ্যা ৬টা',
  });

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
    },
    {
      title: "ওয়েবসাইট ম্যানেজমেন্ট",
      icon: Globe,
      url: "/admin/website-management",
      isActive: true,
    },
    {
      title: "সেটিংস",
      icon: Settings,
      url: "/admin/settings",
    },
  ];

  const handleSave = (section: string) => {
    // Here you would typically send the data to your backend
    console.log(`Saving ${section} content`);
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
                  <h1 className="text-2xl font-bold text-gray-800">ওয়েবসাইট ম্যানেজমেন্ট</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-8">
            <Tabs defaultValue="home" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="home" className="flex items-center space-x-2">
                  <Home size={16} />
                  <span>হোম পেইজ</span>
                </TabsTrigger>
                <TabsTrigger value="about" className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>আমাদের সম্পর্কে</span>
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center space-x-2">
                  <FileText size={16} />
                  <span>সেবাসমূহ</span>
                </TabsTrigger>
                <TabsTrigger value="contact" className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>যোগাযোগ</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="home">
                <Card>
                  <CardHeader>
                    <CardTitle>হোম পেইজ কন্টেন্ট</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="heroTitle">হিরো সেকশন শিরোনাম</Label>
                      <Input
                        id="heroTitle"
                        value={homeContent.heroTitle}
                        onChange={(e) => setHomeContent({...homeContent, heroTitle: e.target.value})}
                        placeholder="প্রধান শিরোনাম"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="heroSubtitle">হিরো সেকশন উপশিরোনাম</Label>
                      <Input
                        id="heroSubtitle"
                        value={homeContent.heroSubtitle}
                        onChange={(e) => setHomeContent({...homeContent, heroSubtitle: e.target.value})}
                        placeholder="উপশিরোনাম"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="heroDescription">হিরো সেকশন বিবরণ</Label>
                      <Textarea
                        id="heroDescription"
                        value={homeContent.heroDescription}
                        onChange={(e) => setHomeContent({...homeContent, heroDescription: e.target.value})}
                        placeholder="বিবরণ"
                        rows={3}
                      />
                    </div>
                    
                    <Button onClick={() => handleSave('home')} className="w-full">
                      <Save className="mr-2" size={16} />
                      সেভ করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>আমাদের সম্পর্কে পেইজ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="aboutTitle">পেইজ শিরোনাম</Label>
                      <Input
                        id="aboutTitle"
                        value={aboutContent.aboutTitle}
                        onChange={(e) => setAboutContent({...aboutContent, aboutTitle: e.target.value})}
                        placeholder="পেইজ শিরোনাম"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="aboutDescription">প্রতিষ্ঠানের পরিচয়</Label>
                      <Textarea
                        id="aboutDescription"
                        value={aboutContent.aboutDescription}
                        onChange={(e) => setAboutContent({...aboutContent, aboutDescription: e.target.value})}
                        placeholder="প্রতিষ্ঠানের বিস্তারিত পরিচয়"
                        rows={5}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="missionStatement">আমাদের লক্ষ্য</Label>
                      <Textarea
                        id="missionStatement"
                        value={aboutContent.missionStatement}
                        onChange={(e) => setAboutContent({...aboutContent, missionStatement: e.target.value})}
                        placeholder="প্রতিষ্ঠানের লক্ষ্য ও উদ্দেশ্য"
                        rows={3}
                      />
                    </div>
                    
                    <Button onClick={() => handleSave('about')} className="w-full">
                      <Save className="mr-2" size={16} />
                      সেভ করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card>
                  <CardHeader>
                    <CardTitle>সেবাসমূহ পেইজ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">ভর্তি সহায়তা সেবা</h3>
                        <div className="space-y-2">
                          <Label>সেবার নাম</Label>
                          <Input placeholder="বিশ্ববিদ্যালয়ে ভর্তি সহায়তা" />
                        </div>
                        <div className="space-y-2">
                          <Label>সেবার বিবরণ</Label>
                          <Textarea rows={3} placeholder="সেবার বিস্তারিত বিবরণ" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">ভিসা প্রসেসিং সেবা</h3>
                        <div className="space-y-2">
                          <Label>সেবার নাম</Label>
                          <Input placeholder="ভিসা প্রসেসিং" />
                        </div>
                        <div className="space-y-2">
                          <Label>সেবার বিবরণ</Label>
                          <Textarea rows={3} placeholder="সেবার বিস্তারিত বিবরণ" />
                        </div>
                      </div>
                    </div>
                    
                    <Button onClick={() => handleSave('services')} className="w-full">
                      <Save className="mr-2" size={16} />
                      সেভ করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle>যোগাযোগ তথ্য</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="address">ঠিকানা</Label>
                        <Textarea
                          id="address"
                          value={contactContent.address}
                          onChange={(e) => setContactContent({...contactContent, address: e.target.value})}
                          placeholder="অফিসের ঠিকানা"
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">ফোন নাম্বার</Label>
                          <Input
                            id="phone"
                            value={contactContent.phone}
                            onChange={(e) => setContactContent({...contactContent, phone: e.target.value})}
                            placeholder="ফোন নাম্বার"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">ইমেইল</Label>
                          <Input
                            id="email"
                            value={contactContent.email}
                            onChange={(e) => setContactContent({...contactContent, email: e.target.value})}
                            placeholder="ইমেইল ঠিকানা"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="workingHours">কার্যসময়</Label>
                          <Input
                            id="workingHours"
                            value={contactContent.workingHours}
                            onChange={(e) => setContactContent({...contactContent, workingHours: e.target.value})}
                            placeholder="কার্যসময়"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button onClick={() => handleSave('contact')} className="w-full">
                      <Save className="mr-2" size={16} />
                      সেভ করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default WebsiteManagement;
