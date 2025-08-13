
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, File, X, CheckCircle, Phone } from 'lucide-react';

const DocumentUpload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{id: number, name: string, type: string, size: string}>>([]);

  const documentTypes = [
    'Academic Transcript',
    'IELTS Score',
    'Passport Copy',
    'CV/Resume',
    'Statement of Purpose',
    'Financial Documents',
    'Other Documents'
  ];

  const handleVerify = () => {
    // Mock verification - in real app, this would verify against the lead's phone number
    if (phoneNumber.length > 0) {
      setIsVerified(true);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newFile = {
        id: Date.now(),
        name: file.name,
        type: docType,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
      };
      setUploadedFiles([...uploadedFiles, newFile]);
    }
  };

  const handleRemoveFile = (fileId: number) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
  };

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-blue-600 mr-2" />
              Document Upload Portal
            </CardTitle>
            <p className="text-gray-600">
              Please verify your phone number to access the document upload section
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <Button onClick={handleVerify} className="w-full" disabled={!phoneNumber}>
              Verify Phone Number
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Enter the same phone number you used when submitting your interest form
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Document Upload Portal</h1>
          </div>
          <p className="text-gray-600">Upload your required documents for visa processing</p>
          <Badge className="mt-2 bg-green-100 text-green-800">Verified: {phoneNumber}</Badge>
        </div>

        {/* Upload Sections */}
        <div className="grid gap-6">
          {documentTypes.map((docType) => (
            <Card key={docType}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  {docType}
                  <Badge variant="outline">
                    {uploadedFiles.filter(f => f.type === docType).length} uploaded
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Drag and drop your files here, or click to browse
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e, docType)}
                    className="hidden"
                    id={`upload-${docType}`}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor={`upload-${docType}`}>
                    <Button variant="outline" className="cursor-pointer">
                      Browse Files
                    </Button>
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                  </p>
                </div>

                {/* Show uploaded files for this document type */}
                {uploadedFiles.filter(f => f.type === docType).length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-gray-700">Uploaded Files:</h4>
                    {uploadedFiles
                      .filter(f => f.type === docType)
                      .map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <File className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-gray-800">{file.name}</p>
                              <p className="text-sm text-gray-500">{file.size}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveFile(file.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Section */}
        <Card className="mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Ready to Submit?</h3>
            <p className="text-gray-600 mb-4">
              Make sure you have uploaded all required documents before submitting
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline">Save as Draft</Button>
              <Button disabled={uploadedFiles.length === 0}>
                Submit Documents
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Total files uploaded: {uploadedFiles.length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentUpload;
