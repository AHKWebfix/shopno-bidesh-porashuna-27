import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Plus, FileText, Image, FileIcon, Edit, Trash2, Upload, Eye, Download, Replace } from 'lucide-react';
const MaterialManagement = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);
  const [materials, setMaterials] = useState([{
    id: 1,
    title: 'IELTS Preparation Guide',
    description: 'Complete guide for IELTS exam preparation with tips and strategies',
    type: 'pdf',
    fileSize: '2.5 MB',
    uploadDate: '2024-01-15',
    status: 'Active',
    downloads: 245
  }, {
    id: 2,
    title: 'Visa Application Checklist',
    description: 'Essential documents checklist for student visa application',
    type: 'pdf',
    fileSize: '1.2 MB',
    uploadDate: '2024-01-12',
    status: 'Active',
    downloads: 189
  }, {
    id: 3,
    title: 'University Selection Guide',
    description: 'How to choose the right university for your studies abroad',
    type: 'image',
    fileSize: '850 KB',
    uploadDate: '2024-01-10',
    status: 'Active',
    downloads: 156
  }, {
    id: 4,
    title: 'SOP Writing Template',
    description: 'Statement of Purpose template and writing guidelines',
    type: 'pdf',
    fileSize: '1.8 MB',
    uploadDate: '2024-01-08',
    status: 'Draft',
    downloads: 78
  }]);
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'image':
        return <Image className="w-5 h-5 text-blue-500" />;
      default:
        return <FileIcon className="w-5 h-5 text-gray-500" />;
    }
  };
  const handleUpload = () => {
    console.log('Uploading new material...');
    setIsUploadModalOpen(false);
  };
  const handleView = (material: any) => {
    setSelectedMaterial(material);
    setIsViewModalOpen(true);
  };
  const handleEdit = (material: any) => {
    setSelectedMaterial(material);
    setIsEditModalOpen(true);
  };
  const handleDelete = (material: any) => {
    setSelectedMaterial(material);
    setIsDeleteDialogOpen(true);
  };
  const confirmDelete = () => {
    console.log('Deleting material:', selectedMaterial?.id);
    setIsDeleteDialogOpen(false);
    setSelectedMaterial(null);
  };
  const saveEdit = () => {
    console.log('Saving edit for material:', selectedMaterial?.id);
    setIsEditModalOpen(false);
    setSelectedMaterial(null);
  };
  const handleFileReplace = () => {
    console.log('Replacing file for material:', selectedMaterial?.id);
    // File replacement logic would go here
  };
  return <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Material Management</h1>
          <p className="text-gray-600 mt-1">Manage study materials for the public website</p>
        </div>
        
        <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Upload New Material
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Material</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter material title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter material description" rows={3} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB
                  </p>
                  <Input id="file" type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setIsUploadModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpload}>
                  Upload Material
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Materials</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Materials Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Materials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Material</TableHead>
                  <TableHead className="hidden sm:table-cell">Type</TableHead>
                  <TableHead className="hidden sm:table-cell">Size</TableHead>
                  <TableHead className="hidden md:table-cell">Upload Date</TableHead>
                  <TableHead className="hidden sm:table-cell">Downloads</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materials.map(material => <TableRow key={material.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        {getFileIcon(material.type)}
                        <div className="min-w-0 flex-1">
                          <div className="font-medium truncate">{material.title}</div>
                          <div className="text-sm text-gray-500 line-clamp-2 sm:line-clamp-1">
                            {material.description}
                          </div>
                          {/* Show additional info on mobile */}
                          <div className="text-xs text-gray-400 mt-1 sm:hidden">
                            <span className="capitalize">{material.type}</span> • {material.fileSize} • {material.uploadDate} • {material.downloads} downloads
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className="capitalize text-sm bg-gray-100 px-2 py-1 rounded">
                        {material.type}
                      </span>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{material.fileSize}</TableCell>
                    <TableCell className="hidden md:table-cell">{material.uploadDate}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className="text-sm font-medium text-blue-600">{material.downloads}</span>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className={`text-sm px-2 py-1 rounded ${material.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {material.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1 sm:space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleView(material)} className="hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer" title="View material">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(material)} className="hover:bg-green-50 hover:text-green-600 transition-colors duration-200 cursor-pointer" title="Edit material">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(material)} className="text-red-600 hover:text-red-800 hover:bg-red-50 transition-colors duration-200 cursor-pointer" title="Delete material">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* View Material Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>View Material</DialogTitle>
          </DialogHeader>
          {selectedMaterial && <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {getFileIcon(selectedMaterial.type)}
                <div>
                  <h3 className="font-semibold text-lg">{selectedMaterial.title}</h3>
                  <p className="text-sm text-gray-500">
                    {selectedMaterial.type.toUpperCase()} • {selectedMaterial.fileSize}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Description</Label>
                <p className="text-sm text-gray-700 mt-1">{selectedMaterial.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Upload Date</Label>
                  <p className="text-sm text-gray-700">{selectedMaterial.uploadDate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <p className={`text-sm font-medium ${selectedMaterial.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {selectedMaterial.status}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button onClick={() => setIsViewModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>}
        </DialogContent>
      </Dialog>

      {/* Edit Material Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Material</DialogTitle>
          </DialogHeader>
          {selectedMaterial && <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input id="edit-title" defaultValue={selectedMaterial.title} placeholder="Enter material title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea id="edit-description" defaultValue={selectedMaterial.description} placeholder="Enter material description" rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Current File</Label>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  {getFileIcon(selectedMaterial.type)}
                  <div className="flex-1">
                    <div className="font-medium">{selectedMaterial.title}</div>
                    <div className="text-sm text-gray-500">
                      {selectedMaterial.type.toUpperCase()} • {selectedMaterial.fileSize}
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="replace-file">Replace File (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors">
                  <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB
                  </p>
                  <Input id="replace-file" type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <select id="edit-status" defaultValue={selectedMaterial.status} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveEdit}>
                  Save Changes
                </Button>
              </div>
            </div>}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the material
              "{selectedMaterial?.title}" from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>;
};
export default MaterialManagement;