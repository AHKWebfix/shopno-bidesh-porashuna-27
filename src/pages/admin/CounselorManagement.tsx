
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  UserCheck, 
  Mail, 
  Phone, 
  Calendar,
  Activity,
  Award
} from 'lucide-react';

const CounselorManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const counselors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@begleducation.com',
      phone: '+1-234-567-8901',
      joinDate: '2023-06-15',
      status: 'Active',
      assignedLeads: 25,
      completedFiles: 18,
      successRate: 72,
      specialization: ['Canada', 'Australia'],
      role: 'Senior Counselor'
    },
    {
      id: 2,
      name: 'David Wilson',
      email: 'david.wilson@begleducation.com',
      phone: '+1-234-567-8902',
      joinDate: '2023-08-20',
      status: 'Active',
      assignedLeads: 22,
      completedFiles: 15,
      successRate: 68,
      specialization: ['UK', 'Ireland'],
      role: 'Counselor'
    },
    {
      id: 3,
      name: 'Emma Brown',
      email: 'emma.brown@begleducation.com',
      phone: '+1-234-567-8903',
      joinDate: '2023-04-10',
      status: 'Active',
      assignedLeads: 30,
      completedFiles: 24,
      successRate: 80,
      specialization: ['USA', 'Canada'],
      role: 'Senior Counselor'
    },
    {
      id: 4,
      name: 'Michael Davis',
      email: 'michael.davis@begleducation.com',
      phone: '+1-234-567-8904',
      joinDate: '2023-11-05',
      status: 'On Leave',
      assignedLeads: 15,
      completedFiles: 8,
      successRate: 53,
      specialization: ['Germany', 'Netherlands'],
      role: 'Junior Counselor'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Senior Counselor': return 'bg-purple-100 text-purple-800';
      case 'Counselor': return 'bg-blue-100 text-blue-800';
      case 'Junior Counselor': return 'bg-orange-100 text-orange-800';
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
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Counselor
          </Button>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
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
          </div>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <UserCheck className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Counselors</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">68%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Counselors Grid */}
        <div className="grid gap-6">
          {counselors.map((counselor) => (
            <Card key={counselor.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{counselor.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {counselor.email}
                          </span>
                          <span className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {counselor.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(counselor.status)}>
                            {counselor.status}
                          </Badge>
                          <Badge className={getRoleColor(counselor.role)}>
                            {counselor.role}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{counselor.assignedLeads}</div>
                        <div className="text-sm text-blue-800">Assigned Leads</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{counselor.completedFiles}</div>
                        <div className="text-sm text-green-800">Completed Files</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{counselor.successRate}%</div>
                        <div className="text-sm text-purple-800">Success Rate</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="flex items-center text-sm text-orange-800">
                          <Calendar className="h-4 w-4 mr-1" />
                          Joined {counselor.joinDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Specialization:</span>
                      {counselor.specialization.map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ml-6">
                    <Button size="sm" className="w-full lg:w-auto">
                      <Activity className="h-4 w-4 mr-2" />
                      View Performance
                    </Button>
                    <Button size="sm" variant="outline" className="w-full lg:w-auto">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button size="sm" variant="outline" className="w-full lg:w-auto text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounselorManagement;
