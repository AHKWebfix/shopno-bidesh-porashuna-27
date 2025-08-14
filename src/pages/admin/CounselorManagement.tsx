import React, { useState } from 'react';
import { 
  UserPlus, 
  Search, 
  Edit, 
  Trash2, 
  User, 
  Mail, 
  Users,
  Plus,
  Link,
  Copy
} from 'lucide-react';
import CounselorEditModal from '@/components/admin/CounselorEditModal';

const CounselorManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState<any>(null);

  const [counselors, setCounselors] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@beglbd.com',
      username: 'sarah_j',
      assignedLeads: 23,
      activeLeads: 12,
      completedLeads: 45,
      isActive: true
    },
    {
      id: 2,
      name: 'David Smith',
      email: 'david.smith@beglbd.com',
      username: 'david_s',
      assignedLeads: 18,
      activeLeads: 8,
      completedLeads: 32,
      isActive: true
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@beglbd.com',
      username: 'emily_d',
      assignedLeads: 31,
      activeLeads: 15,
      completedLeads: 67,
      isActive: false
    },
    {
      id: 4,
      name: 'Michael Brown',
      email: 'michael.brown@beglbd.com',
      username: 'michael_b',
      assignedLeads: 26,
      activeLeads: 11,
      completedLeads: 38,
      isActive: true
    }
  ]);

  const filteredCounselors = counselors.filter(counselor =>
    counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    counselor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditCounselor = (counselor: any) => {
    setSelectedCounselor(counselor);
    setEditModalOpen(true);
  };

  const handleUpdateCounselor = (counselorId: number, updatedData: any) => {
    setCounselors(counselors.map(counselor => 
      counselor.id === counselorId ? { ...counselor, ...updatedData } : counselor
    ));
    console.log('Updated counselor:', counselorId, updatedData);
  };

  const handleGenerateLink = () => {
    // Generate a random link
    const randomId = Math.random().toString(36).substr(2, 9);
    const newLink = `https://beglbd.com/upload/${randomId}`;
    setGeneratedLink(newLink);
    console.log('Generated upload link:', newLink);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Counselor Management</h1>
          <p className="text-gray-600 mt-1">Manage counselors and their lead assignments</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="mt-4 sm:mt-0 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add New Counselor</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search counselors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Add New Counselor Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Add New Counselor</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter password"
              />
            </div>
            <div className="md:col-span-2 flex justify-end space-x-3 mt-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Add Counselor
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Counselor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Leads
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Leads
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCounselors.map((counselor) => (
                <tr key={counselor.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{counselor.name}</div>
                        <div className="text-sm text-gray-500">@{counselor.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Mail className="w-3 h-3 mr-1" />
                      {counselor.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Users className="w-3 h-3 mr-1" />
                      {counselor.assignedLeads}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {counselor.activeLeads}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {counselor.completedLeads}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleEditCounselor(counselor)}
                        className="text-primary hover:text-primary/80 p-1 rounded transition-colors"
                        title="Edit Counselor"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 p-1 rounded transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {filteredCounselors.map((counselor) => (
          <div key={counselor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{counselor.name}</h3>
                  <p className="text-sm text-gray-500">@{counselor.username}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleEditCounselor(counselor)}
                  className="text-primary hover:text-primary/80 p-2 rounded transition-colors"
                  title="Edit Counselor"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-800 p-2 rounded transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-3 h-3 mr-2" />
                {counselor.email}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                  <Users className="w-3 h-3 mr-1" />
                  <span className="text-xs">Assigned</span>
                </div>
                <span className="font-semibold text-gray-900">{counselor.assignedLeads}</span>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">Active</div>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {counselor.activeLeads}
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">Completed</div>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  {counselor.completedLeads}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Status Update Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Status Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Lead</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Choose a lead...</option>
              <option>Ahmed Rahman</option>
              <option>Fatima Khan</option>
              <option>Mohammad Ali</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Update Status</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Pending</option>
              <option>Contacted</option>
              <option>File Open</option>
              <option>Not Interested</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              Update Status
            </button>
          </div>
        </div>
      </div>

      {/* Document Upload Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Upload Management</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-200 rounded-lg space-y-4 sm:space-y-0">
            <div>
              <h4 className="font-medium text-gray-900">Generate Upload Link</h4>
              <p className="text-sm text-gray-600">Create secure upload links for students</p>
            </div>
            <button 
              onClick={handleGenerateLink}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center justify-center space-x-2 transition-colors"
            >
              <Link className="w-4 h-4" />
              <span>Generate Link</span>
            </button>
          </div>
          
          {generatedLink && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Generated Upload Link:</p>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                />
                <button 
                  onClick={handleCopyLink}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm flex items-center justify-center space-x-1 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <CounselorEditModal 
        counselor={selectedCounselor}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onUpdate={handleUpdateCounselor}
      />
    </div>
  );
};

export default CounselorManagement;
