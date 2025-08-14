
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText,
  Calendar,
  User
} from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const DocumentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [isSearching, setIsSearching] = useState(false);

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

      {/* Document List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="text-center text-gray-500 py-8">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium">Document Management</h3>
          <p className="text-sm">Document management functionality will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;
