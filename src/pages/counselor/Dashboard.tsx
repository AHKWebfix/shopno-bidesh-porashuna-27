
import React, { useState } from 'react';
import { 
  Users,
  FileText,
  TrendingUp,
  Clock,
  Eye,
  Edit,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Plane
} from 'lucide-react';
import CounselorLeadViewModal from '@/components/counselor/CounselorLeadViewModal';
import CounselorLeadEditModal from '@/components/counselor/CounselorLeadEditModal';

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  country: string;
  status: string;
  dateSubmitted: string;
  lastContact: string;
  notes: string;
}

const CounselorDashboard = () => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const recentLeads: Lead[] = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      phone: '+880 1712-345678',
      email: 'ahmed.rahman@email.com',
      country: 'Australia',
      status: 'Contacted',
      dateSubmitted: '2024-01-15',
      lastContact: '2024-01-20',
      notes: 'Interested in Computer Science program. Follow up needed.'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      phone: '+880 1812-456789',
      email: 'fatima.khan@email.com',
      country: 'Malaysia',
      status: 'File Open',
      dateSubmitted: '2024-01-14',
      lastContact: '2024-01-22',
      notes: 'Documents submitted. Awaiting university response.'
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      phone: '+880 1912-567890',
      email: 'mohammad.ali@email.com',
      country: 'UK',
      status: 'Pending',
      dateSubmitted: '2024-01-14',
      lastContact: '2024-01-16',
      notes: 'Initial inquiry about MBA programs.'
    },
    {
      id: 4,
      name: 'Rashida Begum',
      phone: '+880 1612-234567',
      email: 'rashida.begum@email.com',
      country: 'New Zealand',
      status: 'Successfully Departed',
      dateSubmitted: '2024-01-13',
      lastContact: '2024-02-15',
      notes: 'Successfully departed for Auckland University. Nursing program started in February 2024.'
    }
  ];

  const stats = [
    { label: 'Total Leads', value: '25', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Leads', value: '18', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Documents Pending', value: '6', icon: FileText, color: 'bg-yellow-500' },
    { label: 'Follow-ups Due', value: '3', icon: Clock, color: 'bg-red-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'File Open':
        return 'bg-green-100 text-green-800';
      case 'Contacted':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Not Interested':
        return 'bg-red-100 text-red-800';
      case 'Successfully Departed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'Successfully Departed') {
      return <Plane className="w-3 h-3 mr-1" />;
    }
    return null;
  };

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsViewModalOpen(true);
  };

  const handleEditLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsEditModalOpen(true);
  };

  const handleUpdateLead = (leadId: number, updatedData: Partial<Lead>) => {
    console.log('Updating lead:', leadId, updatedData);
    // Handle lead update logic here
  };

  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} rounded-lg p-3 flex-shrink-0`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900">Recent Leads</h2>
          <a href="/counselor/leads" className="text-primary hover:text-primary/80 text-sm font-medium">
            View All
          </a>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="ml-3 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{lead.name}</div>
                        <div className="text-xs text-gray-500">#{lead.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900 break-all">{lead.phone}</div>
                    <div className="text-xs text-gray-500 break-all">{lead.email}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{lead.country}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                      {getStatusIcon(lead.status)}
                      <span className="truncate">{lead.status}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.dateSubmitted}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewLead(lead)}
                        className="text-primary hover:text-primary/80 p-1 rounded"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditLead(lead)}
                        className="text-gray-600 hover:text-gray-800 p-1 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {recentLeads.map((lead) => (
            <div key={lead.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-gray-900 truncate">{lead.name}</h3>
                    <p className="text-sm text-gray-500">#{lead.id}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ml-2 ${getStatusColor(lead.status)}`}>
                  {getStatusIcon(lead.status)}
                  <span className="hidden sm:inline">{lead.status}</span>
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-3 h-3 mr-2 flex-shrink-0" />
                  <span className="break-all">{lead.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-3 h-3 mr-2 flex-shrink-0" />
                  <span className="break-all">{lead.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-3 h-3 mr-2 flex-shrink-0" />
                  <span>{lead.country}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-3 h-3 mr-2 flex-shrink-0" />
                  <span>{lead.dateSubmitted}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleViewLead(lead)}
                  className="flex-1 bg-primary text-white py-2 px-3 rounded-lg text-sm hover:bg-primary/90"
                >
                  View
                </button>
                <button 
                  onClick={() => handleEditLead(lead)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-200"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <CounselorLeadViewModal
        lead={selectedLead}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
      
      <CounselorLeadEditModal
        lead={selectedLead}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdate={handleUpdateLead}
      />
    </div>
  );
};

export default CounselorDashboard;
