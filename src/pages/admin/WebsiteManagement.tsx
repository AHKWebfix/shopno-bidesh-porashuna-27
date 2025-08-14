
import React, { useState } from 'react';
import { 
  Save, Edit, Plus, Trash2, Globe, Users, School, HelpCircle, 
  Phone, Mail, MapPin, Clock, MessageCircle, Eye, Image,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminWebsiteManagement = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [editingItem, setEditingItem] = useState<string | null>(null);

  // Hero Section Data
  const [heroData, setHeroData] = useState({
    title: 'Study Abroad with Confidence',
    subtitle: 'Your Gateway to Global Education',
    description: 'We help students achieve their dreams of studying abroad with personalized guidance, university partnerships, and comprehensive support throughout their journey.',
    primaryButton: 'Get Started Today',
    secondaryButton: 'Learn More'
  });

  // Services Data
  const [servicesData, setServicesData] = useState([
    {
      id: 1,
      title: 'University Selection',
      subtitle: 'Find Your Perfect Match',
      icon: 'School',
      color: '#3B82F6',
      description: 'Expert guidance to choose the right university for your goals'
    },
    {
      id: 2,
      title: 'Visa Assistance',
      subtitle: 'Hassle-Free Processing',
      icon: 'Globe',
      color: '#10B981',
      description: 'Complete visa application support and documentation'
    },
    {
      id: 3,
      title: 'Career Counseling',
      subtitle: 'Shape Your Future',
      icon: 'Users',
      color: '#F59E0B',
      description: 'Professional career guidance and industry insights'
    },
    {
      id: 4,
      title: 'Scholarship Support',
      subtitle: 'Financial Aid Guidance',
      icon: 'HelpCircle',
      color: '#8B5CF6',
      description: 'Help finding and applying for scholarships and grants'
    }
  ]);

  // Partner Universities Data
  const [universitiesData, setUniversitiesData] = useState([
    {
      id: 1,
      name: 'University of Melbourne',
      country: 'Australia',
      countryCode: 'AU',
      colorCode: '#FF6B35'
    },
    {
      id: 2,
      name: 'University of Toronto',
      country: 'Canada',
      countryCode: 'CA',
      colorCode: '#4ECDC4'
    },
    {
      id: 3,
      name: 'Oxford University',
      country: 'United Kingdom',
      countryCode: 'UK',
      colorCode: '#45B7D1'
    },
    {
      id: 4,
      name: 'University of Malaya',
      country: 'Malaysia',
      countryCode: 'MY',
      colorCode: '#96CEB4'
    },
    {
      id: 5,
      name: 'National University of Singapore',
      country: 'Singapore',
      countryCode: 'SG',
      colorCode: '#FFEAA7'
    },
    {
      id: 6,
      name: 'University of Auckland',
      country: 'New Zealand',
      countryCode: 'NZ',
      colorCode: '#DDA0DD'
    }
  ]);

  // FAQ Data
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: 'What documents do I need to study abroad?',
      answer: 'Typically you need academic transcripts, passport, language proficiency test scores (IELTS/TOEFL), statement of purpose, letters of recommendation, and financial documents. Specific requirements vary by country and university.'
    },
    {
      id: 2,
      question: 'How long does the application process take?',
      answer: 'The application process usually takes 3-6 months depending on the country and program. We recommend starting at least 8-12 months before your intended start date to allow time for all preparations.'
    },
    {
      id: 3,
      question: 'Do you help with visa applications?',
      answer: 'Yes, we provide comprehensive visa assistance including document preparation, application guidance, interview preparation, and follow-up support throughout the visa process.'
    },
    {
      id: 4,
      question: 'What are the costs involved in studying abroad?',
      answer: 'Costs vary significantly by country and program. This includes tuition fees, living expenses, visa fees, and other miscellaneous costs. We provide detailed cost breakdowns for each destination during consultation.'
    }
  ]);

  // Contact Data
  const [contactData, setContactData] = useState({
    phone1: '+880 1712-345678',
    phone2: '+880 1812-456789',
    email1: 'info@beglbd.com',
    email2: 'support@beglbd.com',
    address: '123 Education Street, Dhanmondi, Dhaka 1205, Bangladesh',
    officeHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
    whatsapp: '+8801712345678'
  });

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: Globe },
    { id: 'services', name: 'Our Services', icon: Users },
    { id: 'universities', name: 'Partner Universities', icon: School },
    { id: 'faq', name: 'FAQ Section', icon: HelpCircle },
    { id: 'contact', name: 'Contact Information', icon: Phone }
  ];

  const renderHeroSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Hero Section</h3>
        <Button variant="outline" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Main Title</label>
          <input
            type="text"
            value={heroData.title}
            onChange={(e) => setHeroData({...heroData, title: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Subtitle</label>
          <input
            type="text"
            value={heroData.subtitle}
            onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={heroData.description}
            onChange={(e) => setHeroData({...heroData, description: e.target.value})}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Button Text</label>
            <input
              type="text"
              value={heroData.primaryButton}
              onChange={(e) => setHeroData({...heroData, primaryButton: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Secondary Button Text</label>
            <input
              type="text"
              value={heroData.secondaryButton}
              onChange={(e) => setHeroData({...heroData, secondaryButton: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button className="bg-primary text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Our Services</h3>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servicesData.map((service) => (
          <div key={service.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: service.color + '20' }}
                >
                  <School className="w-5 h-5" style={{ color: service.color }} />
                </div>
                <div>
                  <h4 className="font-medium">{service.title}</h4>
                  <p className="text-sm text-gray-500">{service.subtitle}</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">{service.description}</p>
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-xs text-gray-500">Color:</span>
              <div 
                className="w-6 h-6 rounded border border-gray-300"
                style={{ backgroundColor: service.color }}
              ></div>
              <span className="text-xs font-mono">{service.color}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUniversitiesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Partner Universities</h3>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add University
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {universitiesData.map((university) => (
          <div key={university.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: university.colorCode }}
                >
                  {university.countryCode}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{university.name}</h4>
                  <p className="text-xs text-gray-500">{university.country}</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Color:</span>
              <div 
                className="w-4 h-4 rounded border border-gray-300"
                style={{ backgroundColor: university.colorCode }}
              ></div>
              <span className="text-xs font-mono">{university.colorCode}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFAQSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">FAQ Section</h3>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add FAQ
        </Button>
      </div>
      
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
              <div className="flex space-x-1 ml-4">
                <Button variant="ghost" size="sm">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <Button variant="outline" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Phone</label>
            <input
              type="text"
              value={contactData.phone1}
              onChange={(e) => setContactData({...contactData, phone1: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Secondary Phone</label>
            <input
              type="text"
              value={contactData.phone2}
              onChange={(e) => setContactData({...contactData, phone2: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Primary Email</label>
            <input
              type="email"
              value={contactData.email1}
              onChange={(e) => setContactData({...contactData, email1: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Support Email</label>
            <input
              type="email"
              value={contactData.email2}
              onChange={(e) => setContactData({...contactData, email2: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Office Address</label>
            <textarea
              value={contactData.address}
              onChange={(e) => setContactData({...contactData, address: e.target.value})}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Office Hours</label>
            <input
              type="text"
              value={contactData.officeHours}
              onChange={(e) => setContactData({...contactData, officeHours: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={contactData.whatsapp}
                onChange={(e) => setContactData({...contactData, whatsapp: e.target.value})}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-1" />
                Test
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Clicking will open WhatsApp chat</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button className="bg-primary text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'hero': return renderHeroSection();
      case 'services': return renderServicesSection();
      case 'universities': return renderUniversitiesSection();
      case 'faq': return renderFAQSection();
      case 'contact': return renderContactSection();
      default: return renderHeroSection();
    }
  };

  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Website Management</h1>
        <p className="text-gray-600">Manage your website content and sections</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold mb-4">Website Sections</h3>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWebsiteManagement;
