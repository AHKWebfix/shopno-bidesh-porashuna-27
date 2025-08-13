
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Phone, Mail, Calendar, User, Copy, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const LeadDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState('Pending');
  const [uploadLink, setUploadLink] = useState('');

  // Mock data for demonstration
  const lead = {
    id: id,
    name: 'John Doe',
    phone: '+1-234-567-8900',
    email: 'john.doe@email.com',
    country: 'Canada',
    course: 'Computer Science',
    status: 'Pending',
    date: '2024-01-15',
    notes: 'Interested in Engineering programs. Has not taken IELTS yet.'
  };

  const handleGenerateLink = () => {
    const generatedLink = `https://yoursite.com/upload/${lead.id}/${Date.now()}`;
    setUploadLink(generatedLink);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(uploadLink);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/admin/leads')}>
                <ArrowLeft size={20} className="mr-2" />
                Back to Leads
              </Button>
              <h1 className="text-2xl font-bold text-gray-800">Lead Details</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lead Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Lead Information</span>
                  <Badge variant="outline">{lead.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <User className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-medium">{lead.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{lead.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{lead.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Submission Date</p>
                      <p className="font-medium">{lead.date}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">Preferred Country</p>
                  <p className="font-medium">{lead.country}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Course Interest</p>
                  <p className="font-medium">{lead.course}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Notes</p>
                  <p className="text-gray-800">{lead.notes}</p>
                </div>
              </CardContent>
            </Card>

            {/* File Open Section */}
            <Card>
              <CardHeader>
                <CardTitle>File Open Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Update Status
                  </label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Contacted">Contacted</SelectItem>
                      <SelectItem value="Not Interested">Not Interested</SelectItem>
                      <SelectItem value="File Open">File Open</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {status === 'File Open' && (
                  <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <Button onClick={handleGenerateLink} className="mb-4">
                        Generate Upload Link
                      </Button>
                      
                      {uploadLink && (
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Generated Upload Link:
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={uploadLink}
                              readOnly
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
                            />
                            <Button size="sm" variant="outline" onClick={handleCopyLink}>
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-600">
                            Share this link with the student for document upload
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  <Phone size={16} className="mr-2" />
                  Call Student
                </Button>
                <Button className="w-full" variant="outline">
                  <Mail size={16} className="mr-2" />
                  Send Email
                </Button>
                <Button className="w-full" variant="outline">
                  Edit Lead Info
                </Button>
                <Button className="w-full" variant="outline">
                  Assign Counselor
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">Lead Submitted</span>
                    <span className="text-gray-500">{lead.date}</span>
                  </div>
                  <p className="text-gray-600">Initial inquiry received</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
