
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Save, 
  Edit, 
  Plus, 
  Trash2, 
  Globe, 
  Star, 
  Users, 
  Award,
  HelpCircle,
  Image
} from 'lucide-react';

const WebsiteContentManagement = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Mock data for demonstration
  const heroContent = {
    title: "Your Gateway to Global Education",
    subtitle: "Expert guidance for studying abroad in Canada, Australia, UK, USA and more",
    buttonText: "Start Your Journey"
  };

  const services = [
    { id: 1, title: "Study Abroad Counseling", description: "Personalized guidance for your international education journey" },
    { id: 2, title: "University Selection", description: "Find the perfect university that matches your goals and budget" },
    { id: 3, title: "Visa Assistance", description: "Complete support for visa application and documentation" }
  ];

  const universities = [
    { id: 1, name: "University of Toronto", country: "Canada", ranking: 1 },
    { id: 2, name: "University of Melbourne", country: "Australia", ranking: 2 },
    { id: 3, name: "Oxford University", country: "UK", ranking: 3 }
  ];

  const successStats = {
    totalLeads: 1250,
    fileOpenStudents: 450,
    visaApproved: 320
  };

  const faqs = [
    { id: 1, question: "What is the process for studying abroad?", answer: "The process involves university selection, application, visa processing, and pre-departure preparation." },
    { id: 2, question: "How long does the visa process take?", answer: "Visa processing typically takes 4-8 weeks depending on the country and type of visa." }
  ];

  const renderHeroSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Globe className="h-5 w-5 mr-2" />
          Hero Section
        </CardTitle>
        <CardDescription>Main banner content on the homepage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Main Title</label>
          <Input defaultValue={heroContent.title} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Subtitle</label>
          <Textarea defaultValue={heroContent.subtitle} rows={3} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Button Text</label>
          <Input defaultValue={heroContent.buttonText} />
        </div>
        <div className="flex gap-2">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
          <Button variant="outline">
            <Image className="h-4 w-4 mr-2" />
            Update Background
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderServicesSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Services Section
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </CardTitle>
        <CardDescription>Manage your service offerings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <Input defaultValue={service.title} className="font-medium mb-2" />
                  <Textarea defaultValue={service.description} rows={2} />
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4">
          <Save className="h-4 w-4 mr-2" />
          Save All Services
        </Button>
      </CardContent>
    </Card>
  );

  const renderUniversitiesSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Partner Universities
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add University
          </Button>
        </CardTitle>
        <CardDescription>Manage your partner university listings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {universities.map((university) => (
            <div key={university.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <Input defaultValue={university.name} placeholder="University Name" />
                  <Input defaultValue={university.country} placeholder="Country" />
                  <Input type="number" defaultValue={university.ranking} placeholder="Ranking" />
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4">
          <Save className="h-4 w-4 mr-2" />
          Save All Universities
        </Button>
      </CardContent>
    </Card>
  );

  const renderSuccessSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Success Stories & Statistics
        </CardTitle>
        <CardDescription>Update your achievement counters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Total Leads Submitted</label>
            <Input type="number" defaultValue={successStats.totalLeads} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Students with File Open</label>
            <Input type="number" defaultValue={successStats.fileOpenStudents} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Students with Visa Approved</label>
            <Input type="number" defaultValue={successStats.visaApproved} />
          </div>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Update Statistics
        </Button>
      </CardContent>
    </Card>
  );

  const renderFAQSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <HelpCircle className="h-5 w-5 mr-2" />
            FAQ Section
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add FAQ
          </Button>
        </CardTitle>
        <CardDescription>Manage frequently asked questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg p-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Question</label>
                  <Input defaultValue={faq.question} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Answer</label>
                  <Textarea defaultValue={faq.answer} rows={3} />
                </div>
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4">
          <Save className="h-4 w-4 mr-2" />
          Save All FAQs
        </Button>
      </CardContent>
    </Card>
  );

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: Globe },
    { id: 'services', name: 'Services', icon: Star },
    { id: 'universities', name: 'Universities', icon: Award },
    { id: 'success', name: 'Success Stories', icon: Users },
    { id: 'faq', name: 'FAQ', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Website Content Management</h1>
          <p className="text-gray-600 mt-2">Manage your website content and sections</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content Sections</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 ${
                          activeSection === section.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' : 'text-gray-700'
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-3" />
                        {section.name}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeSection === 'hero' && renderHeroSection()}
            {activeSection === 'services' && renderServicesSection()}
            {activeSection === 'universities' && renderUniversitiesSection()}
            {activeSection === 'success' && renderSuccessSection()}
            {activeSection === 'faq' && renderFAQSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteContentManagement;
