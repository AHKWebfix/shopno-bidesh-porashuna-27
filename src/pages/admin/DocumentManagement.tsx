
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText,
  Calendar,
  User,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface DocumentRecord {
  id: number;
  studentName: string;
  studentId: string;
  email: string;
  phone: string;
  documentType: string;
  fileName: string;
  uploadDate: string;
  status: 'pending' | 'approved' | 'rejected';
  fileSize: string;
  submittedBy: string;
}

const DocumentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [isSearching, setIsSearching] = useState(false);

  // Dummy data for documents
  const documents: DocumentRecord[] = [
    {
      id: 1,
      studentName: 'Ahmed Rahman',
      studentId: 'STD001',
      email: 'ahmed.rahman@email.com',
      phone: '+880 1712-345678',
      documentType: 'Academic Transcript',
      fileName: 'transcript_ahmed_rahman.pdf',
      uploadDate: '2024-01-15',
      status: 'approved',
      fileSize: '2.4 MB',
      submittedBy: 'Student Portal'
    },
    {
      id: 2,
      studentName: 'Fatima Khan',
      studentId: 'STD002',
      email: 'fatima.khan@email.com',
      phone: '+880 1812-456789',
      documentType: 'IELTS Certificate',
      fileName: 'ielts_fatima_khan.pdf',
      uploadDate: '2024-01-14',
      status: 'pending',
      fileSize: '1.8 MB',
      submittedBy: 'Counselor Upload'
    },
    {
      id: 3,
      studentName: 'Mohammad Ali',
      studentId: 'STD003',
      email: 'mohammad.ali@email.com',
      phone: '+880 1912-567890',
      documentType: 'Passport Copy',
      fileName: 'passport_mohammad_ali.pdf',
      uploadDate: '2024-01-13',
      status: 'rejected',
      fileSize: '3.2 MB',
      submittedBy: 'Student Portal'
    },
    {
      id: 4,
      studentName: 'Rashida Begum',
      studentId: 'STD004',
      email: 'rashida.begum@email.com',
      phone: '+880 1612-789012',
      documentType: 'Bank Statement',
      fileName: 'bank_statement_rashida.pdf',
      uploadDate: '2024-01-12',
      status: 'approved',
      fileSize: '4.1 MB',
      submittedBy: 'Counselor Upload'
    },
    {
      id: 5,
      studentName: 'Karim Hassan',
      studentId: 'STD005',
      email: 'karim.hassan@email.com',
      phone: '+880 1512-890123',
      documentType: 'Statement of Purpose',
      fileName: 'sop_karim_hassan.docx',
      uploadDate: '2024-01-11',
      status: 'pending',
      fileSize: '856 KB',
      submittedBy: 'Student Portal'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.documentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.fileName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || doc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSearchWithDateRange = () => {
    setIsSearching(true);
    console.log('Searching with date range:', { dateFrom, dateTo, statusFilter });
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const handleExportPDF = () => {
    console.log('Exporting PDF with filters:', { dateFrom, dateTo, statusFilter });
    alert('PDF export functionality would be implemented here');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'rejected':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'approved':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'rejected':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Document Management</h1>
          <p className="text-gray-600 mt-1">Manage student documents and files</p>
        </div>
      </div>

      {/* Filters and Search - RESPONSIVE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          {/* First row - Search and basic filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by student name or document type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Documents</option>
                <option value="pending">Pending Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Second row - Custom date filter and export - FULL WIDTH ON MOBILE */}
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
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{doc.studentName}</div>
                        <div className="text-sm text-gray-500">ID: {doc.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{doc.documentType}</div>
                    <div className="text-xs text-gray-500">{doc.fileName}</div>
                    <div className="text-xs text-gray-400">{doc.fileSize}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {doc.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(doc.status)}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        className="text-primary hover:text-primary/80 p-1 rounded transition-colors"
                        title="View Document"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-green-600 hover:text-green-800 p-1 rounded transition-colors"
                        title="Download Document"
                      >
                        <Download className="w-4 h-4" />
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
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{doc.studentName}</h3>
                  <p className="text-sm text-gray-500">ID: {doc.studentId}</p>
                </div>
              </div>
              <span className={getStatusBadge(doc.status)}>
                {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <FileText className="w-3 h-3 mr-2" />
                {doc.documentType}
              </div>
              <div className="text-xs text-gray-500 ml-5">
                {doc.fileName} ({doc.fileSize})
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-3 h-3 mr-2" />
                {doc.uploadDate}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                {getStatusIcon(doc.status)}
                <span className="ml-2">Submitted by {doc.submittedBy}</span>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 pt-3 border-t border-gray-100">
              <button 
                className="text-primary hover:text-primary/80 p-2 rounded transition-colors"
                title="View Document"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button 
                className="text-green-600 hover:text-green-800 p-2 rounded transition-colors"
                title="Download Document"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredDocuments.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center text-gray-500">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium mb-2">No documents found</h3>
            <p className="text-sm">Try adjusting your search criteria or filters</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentManagement;
