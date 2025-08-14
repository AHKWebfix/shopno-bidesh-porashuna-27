import React, { useState } from 'react';
import { 
  Eye,
  Edit,
  Search,
  Filter,
  Download,
  Plus,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import LeadViewModal from '@/components/admin/LeadViewModal';
import LeadEditModal from '@/components/admin/LeadEditModal';

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  country: string;
  status: string;
  dateSubmitted: string;
  counselor: string;
  counselorName?: string;
  counselorId?: string;
  notes?: string | null;
  lastContact?: string | null;
}

const LeadManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [counselorFilter, setCounselorFilter] = useState('all');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: 'Ahmed Rahman',
      phone: '+880 1712-345678',
      email: 'ahmed.rahman@email.com',
      country: 'Australia',
      status: 'Contacted',
      dateSubmitted: '2024-01-15',
      counselor: 'Sarah Johnson',
      counselorName: 'Sarah Johnson',
      counselorId: 'sarah_j',
      notes: 'Student is very interested in Computer Science programs. Has good academic background with 3.8 GPA. Needs guidance on IELTS preparation and university selection. Planning to apply for Fall 2024 intake.',
      lastContact: '2024-01-22'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      phone: '+880 1812-456789',
      email: 'fatima.khan@email.com',
      country: 'Malaysia',
      status: 'File Open',
      dateSubmitted: '2024-01-14',
      counselor: 'David Smith',
      counselorName: 'David Smith',
      counselorId: 'david_s',
      notes: 'Application submitted to University of Malaya for Business Administration. All documents verified and complete. Waiting for university response. Student is confident about acceptance.',
      lastContact: '2024-01-20'
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      phone: '+880 1912-567890',
      email: 'mohammad.ali@email.com',
      country: 'UK',
      status: 'Pending',
      dateSubmitted: '2024-01-14',
      counselor: 'Not Assigned',
      notes: null,
      lastContact: null
    },
    {
      id: 4,
      name: 'Rashida Begum',
      phone: '+880 1612-234567',
      email: 'rashida.begum@email.com',
      country: 'New Zealand',
      status: 'Successfully Departed',
      dateSubmitted: '2024-01-13',
      counselor: 'Emily Davis',
      counselorName: 'Emily Davis',
      counselorId: 'emily_d',
      notes: 'Student successfully departed for Auckland University. Nursing program started in February 2024. Maintains regular contact and doing well in studies.',
      lastContact: '2024-02-15'
    },
    {
      id: 5,
      name: 'Hassan Ahmed',
      phone: '+880 1512-345678',
      email: 'hassan.ahmed@email.com',
      country: 'Australia',
      status: 'Successfully Departed',
      dateSubmitted: '2024-01-13',
      counselor: 'Michael Brown',
      counselorName: 'Michael Brown',
      counselorId: 'michael_b',
      notes: 'Engineering student successfully departed for University of Melbourne. Received partial scholarship. Currently in first semester and performing excellently.',
      lastContact: '2024-02-10'
    }
  ]);

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

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesCounselor = counselorFilter === 'all' || lead.counselor === counselorFilter;
    
    let matchesDateRange = true;
    if (startDate || endDate) {
      const leadDate = new Date(lead.dateSubmitted);
      if (startDate && leadDate < startDate) matchesDateRange = false;
      if (endDate && leadDate > endDate) matchesDateRange = false;
    }
    
    return matchesSearch && matchesStatus && matchesCounselor && matchesDateRange;
  });

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsViewModalOpen(true);
  };

  const handleEditLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsEditModalOpen(true);
  };

  const handleUpdateLeadStatus = (leadId: number, newStatus: string) => {
    setLeads(prev => prev.map(lead => 
      lead.id === leadId 
        ? { ...lead, status: newStatus }
        : lead
    ));
    console.log('Updated lead status:', leadId, newStatus);
  };

  const clearDateFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const exportToCSV = () => {
    console.log('Exporting leads to CSV...');
  };

  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Lead Management</h1>
          <p className="text-gray-600">Manage and track all student inquiries</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <Button onClick={exportToCSV} variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="mb-6">
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="File Open">File Open</option>
                    <option value="Successfully Departed">Successfully Departed</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>

                <select
                  value={counselorFilter}
                  onChange={(e) => setCounselorFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Counselors</option>
                  <option value="Sarah Johnson">Sarah Johnson</option>
                  <option value="David Smith">David Smith</option>
                  <option value="Emily Davis">Emily Davis</option>
                  <option value="Michael Brown">Michael Brown</option>
                  <option value="Not Assigned">Not Assigned</option>
                </select>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="text-sm font-medium text-gray-700">Custom Date Range:</span>
                  <div className="flex flex-col space-y-2 w-full sm:flex-row sm:space-y-0 sm:space-x-2 sm:w-auto">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full sm:w-[140px] justify-start text-left font-normal"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full sm:w-[140px] justify-start text-left font-normal"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "End date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Button 
                      onClick={clearDateFilters}
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredLeads.length} of {leads.length} leads
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Counselor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">ID: #{lead.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-900">
                          <Phone className="w-3 h-3 mr-1" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="w-3 h-3 mr-1" />
                          {lead.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPin className="w-3 h-3 mr-1" />
                        {lead.country}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                        {getStatusIcon(lead.status)}
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {lead.counselor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.dateSubmitted}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleViewLead(lead)}
                          className="text-primary hover:text-primary/80 p-1 rounded transition-colors"
                          title="View Lead Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleEditLead(lead)}
                          className="text-gray-600 hover:text-gray-800 p-1 rounded transition-colors"
                          title="Edit Lead Status"
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
        </Card>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredLeads.map((lead) => (
          <Card key={lead.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{lead.name}</h3>
                    <p className="text-sm text-gray-500">ID: #{lead.id}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                  {getStatusIcon(lead.status)}
                  {lead.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-3 h-3 mr-2" />
                  {lead.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-3 h-3 mr-2" />
                  {lead.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-3 h-3 mr-2" />
                  {lead.country}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-3 h-3 mr-2" />
                  {lead.counselor}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-3 h-3 mr-2" />
                  {lead.dateSubmitted}
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-gray-100">
                <button 
                  onClick={() => handleViewLead(lead)}
                  className="text-primary hover:text-primary/80 p-2 rounded transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleEditLead(lead)}
                  className="text-gray-600 hover:text-gray-800 p-2 rounded transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modals */}
      <LeadViewModal
        lead={selectedLead}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
      
      <LeadEditModal
        lead={selectedLead}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdate={handleUpdateLeadStatus}
      />
    </div>
  );
};

export default LeadManagement;
