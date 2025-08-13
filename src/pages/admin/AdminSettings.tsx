
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, LayoutDashboard, UserCheck, Settings, LogOut, Globe, User, Lock, Bell, Shield, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const AdminSettings = () => {
  const navigate = useNavigate();
  
  const [profileSettings, setProfileSettings] = useState({
    name: 'মোহাম্মদ হাসান',
    email: 'admin@mheducation.com',
    phone: '০১৭১২৩৪৫৬৭৮',
    role: 'সুপার অ্যাডমিন',
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    emailNotifications: true,
    smsNotifications: false,
    loginAlerts: true,
  });

  const [systemSettings, setSystemSettings] = useState({
    siteName: 'MH Education',
    siteTagline: 'বিদেশে পড়াশোনার সহজ সমাধান',
    timezone: 'Asia/Dhaka',
    language: 'bn',
    autoBackup: true,
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
    },
    {
      title: "সেটিংস",
      icon: Settings,
      url: "/admin/settings",
      isActive: true,
    },
  ];

  const handleSave = (section: string) => {
    console.log(`Saving ${section} settings`);
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
                  <h1 className="text-2xl font-bold text-gray-800">সেটিংস</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-8">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile" className="flex items-center space-x-2">
                  <User size={16} />
                  <span>প্রোফাইল</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center space-x-2">
                  <Shield size={16} />
                  <span>নিরাপত্তা</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center space-x-2">
                  <Bell size={16} />
                  <span>নোটিফিকেশন</span>
                </TabsTrigger>
                <TabsTrigger value="system" className="flex items-center space-x-2">
                  <Database size={16} />
                  <span>সিস্টেম</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>প্রোফাইল তথ্য</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">নাম</Label>
                        <Input
                          id="name"
                          value={profileSettings.name}
                          onChange={(e) => setProfileSettings({...profileSettings, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">ইমেইল</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileSettings.email}
                          onChange={(e) => setProfileSettings({...profileSettings, email: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">ফোন</Label>
                        <Input
                          id="phone"
                          value={profileSettings.phone}
                          onChange={(e) => setProfileSettings({...profileSettings, phone: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="role">ভূমিকা</Label>
                        <Input
                          id="role"
                          value={profileSettings.role}
                          disabled
                          className="bg-gray-100"
                        />
                      </div>
                    </div>
                    
                    <Button onClick={() => handleSave('profile')} className="w-full">
                      <Save className="mr-2" size={16} />
                      প্রোফাইল আপডেট করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>নিরাপত্তা সেটিংস</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">টু-ফ্যাক্টর অথেনটিকেশন</Label>
                          <p className="text-sm text-gray-600">অতিরিক্ত নিরাপত্তার জন্য সক্রিয় করুন</p>
                        </div>
                        <Switch
                          checked={securitySettings.twoFactorAuth}
                          onCheckedChange={(checked) => 
                            setSecuritySettings({...securitySettings, twoFactorAuth: checked})
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">লগইন সতর্কতা</Label>
                          <p className="text-sm text-gray-600">নতুন ডিভাইস থেকে লগইনের সময় বিজ্ঞপ্তি পান</p>
                        </div>
                        <Switch
                          checked={securitySettings.loginAlerts}
                          onCheckedChange={(checked) => 
                            setSecuritySettings({...securitySettings, loginAlerts: checked})
                          }
                        />
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <h3 className="text-lg font-medium mb-4">পাসওয়ার্ড পরিবর্তন</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">বর্তমান পাসওয়ার্ড</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">নতুন পাসওয়ার্ড</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </div>
                    </div>
                    
                    <Button onClick={() => handleSave('security')} className="w-full">
                      <Lock className="mr-2" size={16} />
                      নিরাপত্তা সেটিংস সেভ করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>নোটিফিকেশন সেটিংস</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">ইমেইল নোটিফিকেশন</Label>
                          <p className="text-sm text-gray-600">নতুন লিড ও আপডেটের জন্য ইমেইল পান</p>
                        </div>
                        <Switch
                          checked={securitySettings.emailNotifications}
                          onCheckedChange={(checked) => 
                            setSecuritySettings({...securitySettings, emailNotifications: checked})
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">SMS নোটিফিকেশন</Label>
                          <p className="text-sm text-gray-600">জরুরি বিষয়ে SMS পান</p>
                        </div>
                        <Switch
                          checked={securitySettings.smsNotifications}
                          onCheckedChange={(checked) => 
                            setSecuritySettings({...securitySettings, smsNotifications: checked})
                          }
                        />
                      </div>
                    </div>
                    
                    <Button onClick={() => handleSave('notifications')} className="w-full">
                      <Bell className="mr-2" size={16} />
                      নোটিফিকেশন সেটিংস সেভ করুন
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="system">
                <Card>
                  <CardHeader>
                    <CardTitle>সিস্টেম সেটিংস</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="siteName">সাইটের নাম</Label>
                        <Input
                          id="siteName"
                          value={systemSettings.siteName}
                          onChange={(e) => setSystemSettings({...systemSettings, siteName: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="siteTagline">সাইটের ট্যাগলাইন</Label>
                        <Input
                          id="siteTagline"
                          value={systemSettings.siteTagline}
                          onChange={(e) => setSystemSettings({...systemSettings, siteTagline: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">টাইমজোন</Label>
                        <Select value={systemSettings.timezone} onValueChange={(value) => 
                          setSystemSettings({...systemSettings, timezone: value})
                        }>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Asia/Dhaka">ঢাকা (GMT+6)</SelectItem>
                            <SelectItem value="Asia/Kolkata">কলকাতা (GMT+5:30)</SelectItem>
                            <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="language">ভাষা</Label>
                        <Select value={systemSettings.language} onValueChange={(value) => 
                          setSystemSettings({...systemSettings, language: value})
                        }>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bn">বাংলা</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base font-medium">অটো ব্যাকআপ</Label>
                        <p className="text-sm text-gray-600">দৈনিক ডেটা ব্যাকআপ সক্রিয় করুন</p>
                      </div>
                      <Switch
                        checked={systemSettings.autoBackup}
                        onCheckedChange={(checked) => 
                          setSystemSettings({...systemSettings, autoBackup: checked})
                        }
                      />
                    </div>
                    
                    <Button onClick={() => handleSave('system')} className="w-full">
                      <Database className="mr-2" size={16} />
                      সিস্টেম সেটিংস সেভ করুন
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

export default AdminSettings;
