
import React from 'react';
import UploadLinkGenerator from '@/components/counselor/UploadLinkGenerator';

const CounselorUploadLinks = () => {
  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Upload Links</h1>
        <p className="text-gray-600">Generate secure upload links for students</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <UploadLinkGenerator />
      </div>
    </div>
  );
};

export default CounselorUploadLinks;
