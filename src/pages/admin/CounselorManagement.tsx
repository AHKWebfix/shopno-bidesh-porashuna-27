
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  UserCheck, 
  Mail, 
  Phone, 
  Calendar,
  Eye,
  Users,
  FileText
} from 'lucide-react';

const CounselorManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Mock data for demonstration
  const counselors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      phone: '+1-234-567-8901',
      username: 'sarah_johnson',
      joinDate: '2023-06-15',
      status: 'Active',
      assignedLeads: 25,
      completedFiles: 18
    },
    {
      id: 2,
      name: 'David Wilson',
      email: 'david.wilson@company.com',
      phone: '+1-234-567-8902',
      username: 'david_wilson',
      joinDate: '2023-08-20',
      status: 'Active',
      assignedLeads: 22,
      completedFiles: 15
    },
    {
      id: 3,
      name: 'Emma Brown',
      email: 'emma.brown@company.com',
      phone: '+1-234-567-8903',
      username: 'emma_brown',
      joinDate: '2023-04-10',
      status: 'Inactive',
      assignedLeads: 30,
      completedFiles: 24
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Counselor Management</h1>
            <p className="text-gray-600 mt-2">Manage your counseling team</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Counselor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Counselor</DialogTitle>
                <DialogDescription>
                  Create a new counselor account with login credentials
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Full Name
                  </Label>
                  <Input id="name" placeholder="Enter full name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" placeholder="Enter username" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="Enter email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="phone" placeholder="Enter phone number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input id="password" type="password" placeholder="Enter password" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="department" className="text-right">
                    Department
                  </Label>
                  <Input id="department" placeholder="Enter department" className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>
                  Create Counselor
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search counselors by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <UserCheck className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Counselors</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {counselors.filter(c => c.status === 'Active').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Counselors</p>
                  <p className="text-2xl font-bold text-gray-900">{counselors.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Assigned Leads</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {counselors.reduce((total, counselor) => total + counselor.assignedLeads, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Counselors Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Counselors</CardTitle>
            <CardDescription>List of existing counselors and their information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Username</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Assigned Leads</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Completed</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Join Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {counselors.map((counselor) => (
                    <tr key={counselor.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {counselor.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{counselor.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail size={12} className="mr-1 text-gray-400" />
                            {counselor.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone size={12} className="mr-1 text-gray-400" />
                            {counselor.phone}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm font-mono">{counselor.username}</td>
                      <td className="py-3 px-4">
                        <span className="text-lg font-semibold text-blue-600">
                          {counselor.assignedLeads}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-lg font-semibold text-green-600">
                          {counselor.completedFiles}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(counselor.status)}>
                          {counselor.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1 text-gray-400" />
                          {counselor.joinDate}
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
    </div>
  );
};

export default CounselorManagement;
