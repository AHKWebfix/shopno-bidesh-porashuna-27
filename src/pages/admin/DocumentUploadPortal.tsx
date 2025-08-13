
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Download,
  Eye,
  Trash2,
  Phone,
  User
} from 'lucide-react';

const DocumentUploadPortal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // Mock data for demonstration
  const studentData = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1-234-567-8900',
    leadId: 'LEAD-2024-001',
    status: 'File Open'
  };

  const requiredDocuments = [
    { id: 1, name: 'Academic Transcripts', required: true, uploaded: true, fileName: 'transcripts.pdf', uploadDate: '2024-01-15' },
    { id: 2, name: 'IELTS Score Report', required: true, uploaded: true, fileName: 'ielts_report.pdf', uploadDate: '2024-01-14' },
    { id: 3, name: 'Passport Copy', required: true, uploaded: false, fileName: null, uploadDate: null },
    { id: 4, name: 'Statement of Purpose', required: true, uploaded: false, fileName: null, uploadDate: null },
    { id: 5, name: 'Letters of Recommendation', required: false, uploaded: true, fileName: 'recommendation_letters.pdf', uploadDate: '2024-01-13' },
    { id: 6, name: 'Financial Statements', required: true, uploaded: false, fileName: null, uploadDate: null }
  ];

  const handlePhoneVerification = () => {
    // Mock verification - in real app, this would verify against the lead's phone number
    if (phoneNumber === studentData.phone) {
      setIsVerified(true);
    } else {
      alert('Phone number does not match our records. Please try again.');
    }
  };

  const getDocumentStatusIcon = (uploaded: boolean, required: boolean) => {
    if (uploaded) {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    } else if (required) {
      return <AlertCircle className="h-5 w-5 text-red-600" />;
    } else {
      return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getDocumentStatusText = (uploaded: boolean, required: boolean) => {
    if (uploaded) {
      return <Badge className="bg-green-100 text-green-800">Uploaded</Badge>;
    } else if (required) {
      return <Badge className="bg-red-100 text-red-800">Required</Badge>;
    } else {
      return <Badge className="bg-gray-100 text-gray-800">Optional</Badge>;
    }
  };

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center mb-2">
              <Phone className="h-6 w-6 mr-2 text-blue-600" />
              Verify Your Identity
            </CardTitle>
            <CardDescription>
              Please enter your phone number to access your document upload portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input
                type="tel"
                placeholder="+1-234-567-8900"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter the same phone number you used when submitting your interest form
              </p>
            </div>
            <Button onClick={handlePhoneVerification} className="w-full">
              Verify & Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                    <User className="h-6 w-6 mr-2" />
                    Welcome, {studentData.name}
                  </h1>
                  <p className="text-gray-600 mt-1">Lead ID: {studentData.leadId}</p>
                  <Badge className="bg-purple-100 text-purple-800 mt-2">
                    {studentData.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Contact Information</p>
                  <p className="font-medium">{studentData.email}</p>
                  <p className="font-medium">{studentData.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Document Upload Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Please upload clear, high-quality scans or photos of your documents</li>
                <li>• Accepted formats: PDF, JPG, PNG (Max size: 10MB per file)</li>
                <li>• Required documents must be uploaded to proceed with your application</li>
                <li>• All documents will be securely stored and used only for application purposes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Required Documents
            </CardTitle>
            <CardDescription>
              Upload the following documents to complete your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requiredDocuments.map((doc) => (
                <div key={doc.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getDocumentStatusIcon(doc.uploaded, doc.required)}
                      <div>
                        <h3 className="font-medium text-gray-900">{doc.name}</h3>
                        {doc.uploaded && doc.fileName && (
                          <p className="text-sm text-gray-600">
                            File: {doc.fileName} • Uploaded: {doc.uploadDate}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getDocumentStatusText(doc.uploaded, doc.required)}
                      {doc.uploaded ? (
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm">
                          <Upload className="h-4 w-4 mr-1" />
                          Upload
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upload Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Upload Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Required Documents</span>
                <span>2 of 5 completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Complete all required documents to proceed with your application
                </p>
                <Button disabled className="bg-gray-300">
                  Submit Application
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentUploadPortal;
