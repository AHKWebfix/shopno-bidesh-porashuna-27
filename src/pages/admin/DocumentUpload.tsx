
import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  X, 
  Phone,
  Shield,
  AlertCircle
} from 'lucide-react';

const DocumentUpload = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const documentTypes = [
    { id: 'transcript', label: 'Academic Transcript', required: true },
    { id: 'ielts', label: 'IELTS Score Report', required: true },
    { id: 'passport', label: 'Passport Copy', required: true },
    { id: 'cv', label: 'Curriculum Vitae (CV)', required: false },
    { id: 'sop', label: 'Statement of Purpose', required: false },
    { id: 'recommendation', label: 'Recommendation Letters', required: false },
    { id: 'financial', label: 'Financial Documents', required: false },
    { id: 'other', label: 'Other Documents', required: false },
  ];

  const handleVerification = () => {
    if (phoneNumber.length >= 10) {
      setIsVerified(true);
    }
  };

  const handleFileUpload = (documentType: string, files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: documentType,
        uploaded: true
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Document Upload Portal</h1>
            <p className="text-gray-600">Verify your phone number to continue</p>
          </div>

          {/* Verification Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+880 1712-345678"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={handleVerification}
              disabled={phoneNumber.length < 10}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              Verify Phone Number
            </button>
          </div>

          {/* Security Note */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-blue-800 font-medium">Secure Upload</p>
                <p className="text-sm text-blue-700 mt-1">
                  Your documents are encrypted and stored securely. Only authorized personnel can access them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Document Upload</h1>
              <p className="text-gray-600 mt-1">Upload your required documents for study abroad application</p>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Verified: {phoneNumber}</span>
            </div>
          </div>
        </div>

        {/* Upload Instructions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Instructions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <p>Upload clear, high-quality scans of your documents</p>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <p>Accepted formats: PDF, JPG, PNG (Max 10MB per file)</p>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <p>Ensure all text is readable and not cropped</p>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <p>Documents should be in English or with certified translations</p>
            </div>
          </div>
        </div>

        {/* Document Upload Sections */}
        <div className="space-y-6">
          {documentTypes.map((docType) => (
            <div key={docType.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">{docType.label}</h3>
                    {docType.required && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <div className="mb-3">
                  <label className="cursor-pointer">
                    <span className="text-primary hover:text-primary/80 font-medium">
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(docType.id, e.target.files)}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-500">PDF, JPG, PNG up to 10MB</p>
              </div>

              {/* Uploaded Files for this document type */}
              {uploadedFiles.filter(file => file.type === docType.id).length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Uploaded Files:</h4>
                  {uploadedFiles.filter(file => file.type === docType.id).map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Total Files Uploaded: <span className="font-medium">{uploadedFiles.length}</span>
              </p>
              <p className="text-sm text-gray-600">
                Required Documents: <span className="font-medium">
                  {documentTypes.filter(doc => doc.required && uploadedFiles.some(file => file.type === doc.id)).length} / {documentTypes.filter(doc => doc.required).length}
                </span>
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 font-medium">
              Submit Documents
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 p-4 text-sm text-gray-500">
          <p>Need help? Contact us at <a href="mailto:support@beglbd.com" className="text-primary hover:underline">support@beglbd.com</a> or call +880 1712-345678</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
