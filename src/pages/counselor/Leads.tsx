
import React, { useState } from 'react';
import { 
  Eye,
  Edit,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar,
  CalendarDays
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

const CounselorLeads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const leads: Lead[] = [
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
    }
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    
    // Date range filtering
    let matchesDateRange = true;
    if (dateFrom || dateTo) {
      const leadDate = new Date(lead.dateSubmitted);
      if (dateFrom && new Date(dateFrom) > leadDate) matchesDateRange = false;
      if (dateTo && new Date(dateTo) < leadDate) matchesDateRange = false;
    }
    
    return matchesSearch && matchesStatus && matchesDateRange;
  });

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

  const clearDateFilters = () => {
    setDateFrom('');
    setDateTo('');
  };

  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Leads</h1>
        <p className="text-gray-600">Manage and track your assigned leads</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 mb-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Status Filter */}
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
                <option value="Not Interested">Not Interested</option>
              </select>
            </div>

            {/* Date Range Filter */}
            <div className="flex items-center space-x-2">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <div className="flex items-center space-x-2">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  placeholder="From"
                />
                <span className="text-gray-500 text-sm">to</span>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  placeholder="To"
                />
                {(dateFrom || dateTo) && (
                  <button
                    onClick={clearDateFilters}
                    className="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing {filteredLeads.length} of {leads.length} leads
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.dateSubmitted}</div>
                    <div className="text-xs text-gray-500">Last: {lead.lastContact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewLead(lead)}
                        className="text-primary hover:text-primary/80 p-1 rounded transition-colors"
                        title="View Lead"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditLead(lead)}
                        className="text-gray-600 hover:text-gray-800 p-1 rounded transition-colors"
                        title="Edit Lead"
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
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
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
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
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
                <Calendar className="w-3 h-3 mr-2" />
                {lead.dateSubmitted}
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-sm text-gray-600">Last contact: {lead.lastContact}</span>
              <div className="flex items-center space-x-2">
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
            </div>
          </div>
        ))}
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

export default CounselorLeads;
