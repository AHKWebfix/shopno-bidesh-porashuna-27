
import React, { useState } from 'react';
import { Link, Copy, Plus } from 'lucide-react';

const UploadLinkGenerator = () => {
  const [generatedLinks, setGeneratedLinks] = useState<Array<{
    id: string;
    link: string;
    createdAt: string;
    studentName?: string;
  }>>([]);

  const [studentName, setStudentName] = useState('');

  const handleGenerateLink = () => {
    const randomId = Math.random().toString(36).substr(2, 9);
    const newLink = `https://beglbd.com/upload/${randomId}`;
    
    const linkData = {
      id: randomId,
      link: newLink,
      createdAt: new Date().toLocaleString(),
      studentName: studentName.trim() || undefined
    };

    setGeneratedLinks(prev => [linkData, ...prev]);
    setStudentName('');
    console.log('Generated upload link:', linkData);
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Upload Links</h3>
      
      {/* Generate New Link Section */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student name (optional)"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button 
            onClick={handleGenerateLink}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center justify-center space-x-2 transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Generate Link</span>
          </button>
        </div>
      </div>

      {/* Generated Links List */}
      {generatedLinks.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Generated Links</h4>
          {generatedLinks.map((linkData) => (
            <div key={linkData.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  {linkData.studentName && (
                    <p className="text-sm font-medium text-gray-900 mb-1">{linkData.studentName}</p>
                  )}
                  <p className="text-xs text-gray-500">Created: {linkData.createdAt}</p>
                </div>
                <button 
                  onClick={() => handleCopyLink(linkData.link)}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 flex items-center space-x-1 transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Link className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={linkData.link}
                  readOnly
                  className="flex-1 px-2 py-1 bg-white border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadLinkGenerator;
