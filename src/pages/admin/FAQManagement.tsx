
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Edit, Trash2, Search, Save } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  order: number;
}

const FAQManagement = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: 'What documents do I need for university applications?',
      answer: 'You typically need academic transcripts, English proficiency test scores (IELTS/TOEFL), passport copy, statement of purpose, letters of recommendation, and financial documents.',
      order: 1
    },
    {
      id: 2,
      question: 'How long does the visa process take?',
      answer: 'Visa processing time varies by country. Generally, it takes 2-8 weeks for student visas, but it can be longer during peak seasons. We recommend applying at least 3 months before your intended start date.',
      order: 2
    },
    {
      id: 3,
      question: 'Do you provide scholarship assistance?',
      answer: 'Yes, we help students identify and apply for various scholarships including merit-based, need-based, and country-specific scholarships. Our counselors will guide you through the application process.',
      order: 3
    }
  ]);

  const [sectionData, setSectionData] = useState({
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about studying abroad'
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleAddFAQ = (newFAQ: Omit<FAQ, 'id'>) => {
    const faq: FAQ = {
      ...newFAQ,
      id: Date.now()
    };
    setFaqs([...faqs, faq]);
    setIsAddDialogOpen(false);
  };

  const handleEditFAQ = (updatedFAQ: FAQ) => {
    setFaqs(faqs.map(faq => 
      faq.id === updatedFAQ.id ? updatedFAQ : faq
    ));
    setIsEditDialogOpen(false);
    setEditingFAQ(null);
  };

  const handleDeleteFAQ = (faqId: number) => {
    setFaqs(faqs.filter(faq => faq.id !== faqId));
  };

  const openEditDialog = (faq: FAQ) => {
    setEditingFAQ(faq);
    setIsEditDialogOpen(true);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">FAQ Management</h1>
          <p className="text-gray-600 mt-2">Manage your frequently asked questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Management Section */}
          <div className="space-y-6">
            {/* Section Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Section Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sectionTitle">Section Title</Label>
                  <Input
                    id="sectionTitle"
                    value={sectionData.title}
                    onChange={(e) => setSectionData(prev => ({ ...prev, title: e.target.value }))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="sectionDescription">Section Description</Label>
                  <Textarea
                    id="sectionDescription"
                    value={sectionData.description}
                    onChange={(e) => setSectionData(prev => ({ ...prev, description: e.target.value }))}
                    className="mt-2"
                  />
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Section Settings
                </Button>
              </CardContent>
            </Card>

            {/* Search and Add */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>FAQ Management</CardTitle>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add FAQ
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New FAQ</DialogTitle>
                      <DialogDescription>Create a new frequently asked question</DialogDescription>
                    </DialogHeader>
                    <FAQForm onSubmit={handleAddFAQ} onCancel={() => setIsAddDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-blue-600">#{faq.order}</span>
                            <h3 className="font-medium text-gray-900">{faq.question}</h3>
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-2">{faq.answer}</p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="ghost" size="sm" onClick={() => openEditDialog(faq)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteFAQ(faq.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionData.title}</h2>
                  <p className="text-gray-600">{sectionData.description}</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Edit FAQ Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit FAQ</DialogTitle>
              <DialogDescription>Update FAQ information</DialogDescription>
            </DialogHeader>
            {editingFAQ && (
              <FAQForm 
                faq={editingFAQ}
                onSubmit={handleEditFAQ} 
                onCancel={() => setIsEditDialogOpen(false)} 
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

// FAQ Form Component
const FAQForm = ({ 
  faq, 
  onSubmit, 
  onCancel 
}: { 
  faq?: FAQ;
  onSubmit: (faq: FAQ | Omit<FAQ, 'id'>) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState({
    question: faq?.question || '',
    answer: faq?.answer || '',
    order: faq?.order || 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (faq) {
      onSubmit({ ...faq, ...formData });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="question">Question</Label>
        <Input
          id="question"
          value={formData.question}
          onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
          placeholder="Enter the question"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="answer">Answer</Label>
        <Textarea
          id="answer"
          value={formData.answer}
          onChange={(e) => setFormData(prev => ({ ...prev, answer: e.target.value }))}
          placeholder="Enter the answer"
          rows={4}
          required
        />
      </div>

      <div>
        <Label htmlFor="order">Order</Label>
        <Input
          id="order"
          type="number"
          value={formData.order}
          onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 1 }))}
          placeholder="Enter display order"
          min="1"
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {faq ? 'Update FAQ' : 'Add FAQ'}
        </Button>
      </div>
    </form>
  );
};

export default FAQManagement;
