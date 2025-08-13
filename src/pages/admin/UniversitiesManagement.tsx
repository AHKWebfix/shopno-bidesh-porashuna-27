
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Search } from 'lucide-react';

interface University {
  id: number;
  name: string;
  country: string;
  serial: number;
  logo?: string;
}

const UniversitiesManagement = () => {
  const [universities, setUniversities] = useState<University[]>([
    { id: 1, name: 'University of Toronto', country: 'Canada', serial: 1 },
    { id: 2, name: 'University of Melbourne', country: 'Australia', serial: 2 },
    { id: 3, name: 'University of Oxford', country: 'United Kingdom', serial: 3 },
    { id: 4, name: 'Harvard University', country: 'United States', serial: 4 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const countries = [
    'Australia', 'Canada', 'United Kingdom', 'United States', 'Germany', 
    'France', 'Netherlands', 'New Zealand', 'Ireland', 'Sweden'
  ];

  const handleAddUniversity = (newUniversity: Omit<University, 'id'>) => {
    const university: University = {
      ...newUniversity,
      id: Date.now()
    };
    setUniversities([...universities, university]);
    setIsAddDialogOpen(false);
  };

  const handleEditUniversity = (updatedUniversity: University) => {
    setUniversities(universities.map(uni => 
      uni.id === updatedUniversity.id ? updatedUniversity : uni
    ));
    setIsEditDialogOpen(false);
    setEditingUniversity(null);
  };

  const handleDeleteUniversity = (universityId: number) => {
    setUniversities(universities.filter(uni => uni.id !== universityId));
  };

  const openEditDialog = (university: University) => {
    setEditingUniversity(university);
    setIsEditDialogOpen(true);
  };

  const filteredUniversities = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Partnered Universities</h1>
            <p className="text-gray-600 mt-2">Manage your university partnerships</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add University
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New University</DialogTitle>
                <DialogDescription>Add a new partnered university</DialogDescription>
              </DialogHeader>
              <UniversityForm 
                countries={countries}
                onSubmit={handleAddUniversity} 
                onCancel={() => setIsAddDialogOpen(false)} 
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search universities by name or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Universities Table */}
        <Card>
          <CardHeader>
            <CardTitle>University List ({filteredUniversities.length} universities)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Serial</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">University Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Country</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUniversities
                    .sort((a, b) => a.serial - b.serial)
                    .map((university) => (
                    <tr key={university.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <span className="font-medium text-blue-600">#{university.serial}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">
                              {university.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{university.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {university.country}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => openEditDialog(university)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteUniversity(university.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Edit University Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit University</DialogTitle>
              <DialogDescription>Update university information</DialogDescription>
            </DialogHeader>
            {editingUniversity && (
              <UniversityForm 
                university={editingUniversity}
                countries={countries}
                onSubmit={handleEditUniversity} 
                onCancel={() => setIsEditDialogOpen(false)} 
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

// University Form Component
const UniversityForm = ({ 
  university, 
  countries,
  onSubmit, 
  onCancel 
}: { 
  university?: University;
  countries: string[];
  onSubmit: (university: University | Omit<University, 'id'>) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState({
    name: university?.name || '',
    country: university?.country || '',
    serial: university?.serial || 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (university) {
      onSubmit({ ...university, ...formData });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="universityName">University Name</Label>
        <Input
          id="universityName"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Enter university name"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="country">Country</Label>
        <Select value={formData.country} onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="serial">Serial Number</Label>
        <Input
          id="serial"
          type="number"
          value={formData.serial}
          onChange={(e) => setFormData(prev => ({ ...prev, serial: parseInt(e.target.value) || 1 }))}
          placeholder="Enter serial number"
          min="1"
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {university ? 'Update University' : 'Add University'}
        </Button>
      </div>
    </form>
  );
};

export default UniversitiesManagement;
