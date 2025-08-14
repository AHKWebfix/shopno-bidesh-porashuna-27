import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  GraduationCap, 
  MapPin, 
  Star, 
  HelpCircle
} from 'lucide-react';

const WebsiteManagement = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'University Application Assistance',
      description: 'We provide expert guidance to help students navigate the complex university application process.',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Visa Application Support',
      description: 'Our experienced counselors offer comprehensive support for visa applications, ensuring a smooth process.',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Scholarship Guidance',
      description: 'We assist students in finding and applying for scholarships to fund their education abroad.',
      status: 'Inactive'
    }
  ]);

  const [universities, setUniversities] = useState([
    {
      id: 1,
      name: 'University of Oxford',
      country: 'United Kingdom',
      ranking: 1,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Stanford University',
      country: 'United States',
      ranking: 3,
      status: 'Active'
    },
    {
      id: 3,
      name: 'University of Toronto',
      country: 'Canada',
      ranking: 26,
      status: 'Inactive'
    }
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What documents do I need to apply to a university abroad?',
      answer: 'Typically, you will need your academic transcripts, standardized test scores, letters of recommendation, and a personal essay.',
      status: 'Active'
    },
    {
      id: 2,
      question: 'How can BEGL BD help me with my visa application?',
      answer: 'We provide step-by-step guidance, review your documents, and offer advice to ensure a successful visa application.',
      status: 'Active'
    },
    {
      id: 3,
      question: 'What is the cost of studying abroad?',
      answer: 'The cost varies depending on the country and university. We can provide a detailed breakdown based on your preferences.',
      status: 'Inactive'
    }
  ]);

  const handleAddService = () => {
    console.log('Adding new service');
    alert('Add service form would open here');
  };

  const handleAddUniversity = () => {
    console.log('Adding new university');
    alert('Add university form would open here');
  };

  const handleAddFAQ = () => {
    console.log('Adding new FAQ');
    alert('Add FAQ form would open here');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Website Management</h1>
          <p className="text-gray-600 mt-1">Manage website content and settings</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <p className="text-gray-600 text-sm">Manage educational services offered</p>
          </div>
          <button
            onClick={handleAddService}
            className="mt-4 sm:mt-0 bg-primary text-white px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden xs:inline">Add Service</span>
            <span className="xs:hidden">Add</span>
          </button>
        </div>
        
        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  service.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {service.status}
                </span>
                <div className="flex items-center space-x-1">
                  <button className="text-primary hover:text-primary/80 p-1 rounded transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800 p-1 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Universities Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Partner Universities</h3>
            <p className="text-gray-600 text-sm">Manage university partnerships</p>
          </div>
          <button
            onClick={handleAddUniversity}
            className="mt-4 sm:mt-0 bg-primary text-white px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="hidden xs:inline">Add University</span>
            <span className="xs:hidden">Add</span>
          </button>
        </div>
        
        {/* Universities Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {universities.map((university) => (
            <div key={university.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{university.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {university.country}
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  university.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {university.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <Star className="w-3 h-3 inline mr-1" />
                  {university.ranking}
                </div>
                <div className="flex items-center space-x-1">
                  <button className="text-primary hover:text-primary/80 p-1 rounded transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800 p-1 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
            <p className="text-gray-600 text-sm">Manage FAQ content</p>
          </div>
          <button
            onClick={handleAddFAQ}
            className="mt-4 sm:mt-0 bg-primary text-white px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden xs:inline">Add FAQ</span>
            <span className="xs:hidden">Add</span>
          </button>
        </div>
        
        {/* FAQ List - Responsive */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{faq.answer}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end space-x-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    faq.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {faq.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <button className="text-primary hover:text-primary/80 p-1 rounded transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-1 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteManagement;
