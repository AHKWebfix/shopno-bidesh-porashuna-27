import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  User
} from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import LeadViewModal from '@/components/admin/LeadViewModal';
import LeadEditModal from '@/components/admin/LeadEditModal';

const LeadManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const leadsPerPage = 10;

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Ahmed Rahman',
      phone: '+880 1712-345678',
      email: 'ahmed.rahman@email.com',
      country: 'Australia',
      status: 'Contacted',
      dateSubmitted: '2024-01-15',
      counselor: 'Sarah Johnson',
      counselorId: 'sarah_j',
      counselorName: 'Sarah Johnson',
      notes: 'Student is interested in Computer Science programs. Has good academic background with 85% in HSC. Discussed scholarship opportunities and application timeline.',
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
      counselorId: 'david_s',
      counselorName: 'David Smith',
      notes: 'Documents submitted for review. IELTS score: 7.5. Applied for Business Administration program. Waiting for university response.',
      lastContact: '2024-01-21'
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      phone: '+880 1912-567890',
      email: 'mohammad.ali@email.com',
      country: 'UK',
      status: 'Pending',
      dateSubmitted: '2024-01-14',
      counselor: 'Not Assigned'
    },
    {
      id: 4,
      name: 'Rashida Begum',
      phone: '+880 1612-678901',
      email: 'rashida.begum@email.com',
      country: 'New Zealand',
      status: 'Contacted',
      dateSubmitted: '2024-01-13',
      counselor: 'Emily Davis'
    },
    {
      id: 5,
      name: 'Karim Hassan',
      phone: '+880 1512-789012',
      email: 'karim.hassan@email.com',
      country: 'Australia',
      status: 'File Open',
      dateSubmitted: '2024-01-13',
      counselor: 'Michael Brown'
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);
  const startIndex = (currentPage - 1) * leadsPerPage;
  const paginatedLeads = filteredLeads.slice(startIndex, startIndex + leadsPerPage);

  const handleExportPDF = () => {
    console.log('Exporting PDF with filters:', { dateFrom, dateTo, statusFilter });
    alert('PDF export functionality would be implemented here');
  };

  const handleSearchWithDateRange = () => {
    setIsSearching(true);
    console.log('Searching with date range:', { dateFrom, dateTo, statusFilter });
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      setCurrentPage(1); // Reset to first page
    }, 1000);
  };

  const handleViewLead = (lead: any) => {
    setSelectedLead(lead);
    setViewModalOpen(true);
  };

  const handleEditLead = (lead: any) => {
    setSelectedLead(lead);
    setEditModalOpen(true);
  };

  const handleUpdateLead = (leadId: number, newStatus: string) => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    ));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600 mt-1">Manage and track all student leads</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          {/* First row - Search and basic filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

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
          </div>

          {/* Second row - Custom date filter and export - RESPONSIVE */}
          <div className="flex flex-col space-y-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Custom Date Range:</span>
            <div className="flex flex-col space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateFrom ? format(dateFrom, "PPP") : "From date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateTo ? format(dateTo, "PPP") : "To date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button 
                  onClick={handleSearchWithDateRange}
                  disabled={isSearching}
                  className="w-full bg-primary text-white hover:bg-primary/90 flex items-center justify-center space-x-2"
                >
                  <Search className="w-4 h-4" />
                  <span>{isSearching ? 'Searching...' : 'Search'}</span>
                </Button>
                <Button 
                  onClick={handleExportPDF}
                  className="w-full bg-green-600 text-white hover:bg-green-700 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Export PDF</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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
                  Desired Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Counselor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedLeads.map((lead) => (
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.dateSubmitted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.counselor}
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

        {/* Pagination */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(startIndex + leadsPerPage, filteredLeads.length)} of {filteredLeads.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-sm bg-primary text-white rounded">
                {currentPage}
              </span>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {paginatedLeads.map((lead) => (
          <div key={lead.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
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
              <span className="text-sm text-gray-600">
                Counselor: {lead.counselor}
              </span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleViewLead(lead)}
                  className="text-primary hover:text-primary/80 p-2 rounded transition-colors"
                  title="View Lead"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleEditLead(lead)}
                  className="text-gray-600 hover:text-gray-800 p-2 rounded transition-colors"
                  title="Edit Lead"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Mobile Pagination */}
        <div className="flex flex-col items-center space-y-3 pt-4">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(startIndex + leadsPerPage, filteredLeads.length)} of {filteredLeads.length} results
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="px-3 py-1 text-sm bg-primary text-white rounded">
              {currentPage}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <LeadViewModal 
        lead={selectedLead}
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
      />
      
      <LeadEditModal 
        lead={selectedLead}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onUpdate={handleUpdateLead}
      />
    </div>
  );
};

export default LeadManagement;
