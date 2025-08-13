
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Save, Eye } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServicesManagement = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: 'University Selection',
      description: 'Expert guidance in choosing the right university based on your academic profile and career goals.',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'Visa Assistance',
      description: 'Complete visa application support with document preparation and interview coaching.',
      icon: '📋'
    },
    {
      id: 3,
      title: 'Test Preparation',
      description: 'IELTS, TOEFL, and other standardized test preparation with experienced instructors.',
      icon: '📚'
    }
  ]);

  const [sectionData, setSectionData] = useState({
    title: 'Our Services',
    description: 'Comprehensive support for your study abroad journey'
  });

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleAddService = (newService: Omit<Service, 'id'>) => {
    const service: Service = {
      ...newService,
      id: Date.now()
    };
    setServices([...services, service]);
    setIsAddDialogOpen(false);
  };

  const handleEditService = (updatedService: Service) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ));
    setIsEditDialogOpen(false);
    setEditingService(null);
  };

  const handleDeleteService = (serviceId: number) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  const openEditDialog = (service: Service) => {
    setEditingService(service);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
          <p className="text-gray-600 mt-2">Manage your services section content</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Settings */}
          <div className="space-y-6">
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

            {/* Services List */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Services List</CardTitle>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Service</DialogTitle>
                      <DialogDescription>Create a new service for your services section</DialogDescription>
                    </DialogHeader>
                    <ServiceForm onSubmit={handleAddService} onCancel={() => setIsAddDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{service.icon}</span>
                            <h3 className="font-medium text-gray-900">{service.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="ghost" size="sm" onClick={() => openEditDialog(service)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteService(service.id)}
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
                <div className="grid gap-6">
                  {services.map((service) => (
                    <div key={service.id} className="text-center p-6 border rounded-lg">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Edit Service Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>Update service information</DialogDescription>
            </DialogHeader>
            {editingService && (
              <ServiceForm 
                service={editingService}
                onSubmit={handleEditService} 
                onCancel={() => setIsEditDialogOpen(false)} 
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

// Service Form Component
const ServiceForm = ({ 
  service, 
  onSubmit, 
  onCancel 
}: { 
  service?: Service;
  onSubmit: (service: Service | Omit<Service, 'id'>) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState({
    title: service?.title || '',
    description: service?.description || '',
    icon: service?.icon || '🎓'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (service) {
      onSubmit({ ...service, ...formData });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="serviceTitle">Service Title</Label>
        <Input
          id="serviceTitle"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          placeholder="Enter service title"
          required
        />
      </div>
      <div>
        <Label htmlFor="serviceDescription">Description</Label>
        <Textarea
          id="serviceDescription"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Enter service description"
          required
        />
      </div>
      <div>
        <Label htmlFor="serviceIcon">Icon (Emoji)</Label>
        <Input
          id="serviceIcon"
          value={formData.icon}
          onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
          placeholder="Enter emoji icon"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {service ? 'Update Service' : 'Add Service'}
        </Button>
      </div>
    </form>
  );
};

export default ServicesManagement;
