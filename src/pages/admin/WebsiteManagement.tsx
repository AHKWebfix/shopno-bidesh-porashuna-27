
import React, { useState } from 'react';
import { 
  Save, 
  Plus, 
  Edit, 
  Trash2, 
  Globe, 
  Users, 
  Trophy,
  HelpCircle,
  Upload
} from 'lucide-react';

const WebsiteManagement = () => {
  const [activeTab, setActiveTab] = useState('hero');

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: Globe },
    { id: 'services', label: 'Services', icon: Users },
    { id: 'universities', label: 'Universities', icon: Trophy },
    { id: 'counters', label: 'Success Counters', icon: Trophy },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const universities = [
    { id: 1, name: 'University of Toronto', country: 'Canada', serial: 1 },
    { id: 2, name: 'University of Melbourne', country: 'Australia', serial: 2 },
    { id: 3, name: 'University of Oxford', country: 'UK', serial: 3 },
    { id: 4, name: 'Harvard University', country: 'USA', serial: 4 },
  ];

  const faqs = [
    { id: 1, question: 'What documents do I need for application?', answer: 'You will need academic transcripts, IELTS scores, passport copy, and other relevant documents.' },
    { id: 2, question: 'How long does the process take?', answer: 'The complete process typically takes 3-6 months depending on the country and university.' },
  ];

  const renderHeroSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Hero Section Content</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Main Title</label>
          <input
            type="text"
            defaultValue="Your Gateway to Global Education"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
          <textarea
            defaultValue="Expert guidance for studying abroad. Turn your dreams into reality with our comprehensive support."
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
          <input
            type="text"
            defaultValue="Start Your Journey"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Background Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <button className="text-primary hover:text-primary/80">
              Click to upload or drag and drop
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Services Section</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
          <input
            type="text"
            defaultValue="Our Services"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Section Description</label>
          <textarea
            defaultValue="We provide comprehensive study abroad services to help you achieve your academic goals."
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        {/* Service Items */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900">Service Items</h4>
            <button className="bg-primary text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
              <Plus className="w-3 h-3" />
              <span>Add Service</span>
            </button>
          </div>
          
          <div className="space-y-3">
            {['University Selection', 'Application Processing', 'Visa Assistance', 'Pre-departure Support'].map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <span className="text-gray-900">{service}</span>
                <div className="flex items-center space-x-2">
                  <button className="text-primary hover:text-primary/80">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUniversitiesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Partnered Universities</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add University</span>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Serial</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">University Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {universities.map((university) => (
              <tr key={university.id}>
                <td className="px-4 py-3 text-sm text-gray-900">{university.serial}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{university.name}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{university.country}</td>
                <td className="px-4 py-3 text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button className="text-primary hover:text-primary/80">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
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
  );

  const renderCountersSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Success Counters</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Leads Submitted</label>
          <input
            type="number"
            defaultValue="1247"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Students with File Open</label>
          <input
            type="number"
            defaultValue="892"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Students Who Went Abroad</label>
          <input
            type="number"
            defaultValue="456"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  const renderFAQSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">FAQ Management</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add FAQ</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{faq.question}</h4>
              <div className="flex items-center space-x-2">
                <button className="text-primary hover:text-primary/80">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'hero':
        return renderHeroSection();
      case 'services':
        return renderServicesSection();
      case 'universities':
        return renderUniversitiesSection();
      case 'counters':
        return renderCountersSection();
      case 'faq':
        return renderFAQSection();
      default:
        return renderHeroSection();
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Website Management</h1>
        <p className="text-gray-600 mt-1">Manage your website content and settings</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {renderContent()}
          
          {/* Save Button */}
          <div className="flex justify-end mt-6 pt-6 border-t border-gray-200">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteManagement;
