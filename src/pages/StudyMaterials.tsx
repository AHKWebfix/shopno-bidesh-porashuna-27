
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye, Download, BookOpen, Image, FileIcon } from 'lucide-react';

const StudyMaterials = () => {
  // Mock data for demonstration
  const materials = [
    {
      id: 1,
      title: 'IELTS Preparation Guide',
      description: 'Complete guide for IELTS exam preparation with tips and strategies',
      type: 'pdf',
      thumbnail: null,
      fileSize: '2.5 MB',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Visa Application Checklist',
      description: 'Essential documents checklist for student visa application',
      type: 'pdf',
      thumbnail: null,
      fileSize: '1.2 MB',
      uploadDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'University Selection Guide',
      description: 'How to choose the right university for your studies abroad',
      type: 'image',
      thumbnail: '/placeholder.svg',
      fileSize: '850 KB',
      uploadDate: '2024-01-10'
    },
    {
      id: 4,
      title: 'SOP Writing Template',
      description: 'Statement of Purpose template and writing guidelines',
      type: 'pdf',
      thumbnail: null,
      fileSize: '1.8 MB',
      uploadDate: '2024-01-08'
    },
    {
      id: 5,
      title: 'Scholarship Opportunities',
      description: 'Comprehensive list of scholarships for international students',
      type: 'pdf',
      thumbnail: null,
      fileSize: '3.1 MB',
      uploadDate: '2024-01-05'
    },
    {
      id: 6,
      title: 'Country Comparison Chart',
      description: 'Visual comparison of study destinations and their benefits',
      type: 'image',
      thumbnail: '/placeholder.svg',
      fileSize: '1.5 MB',
      uploadDate: '2024-01-03'
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />;
      case 'image':
        return <Image className="w-8 h-8 text-blue-500" />;
      default:
        return <FileIcon className="w-8 h-8 text-gray-500" />;
    }
  };

  const handleView = (material: any) => {
    console.log('Viewing material:', material.title);
  };

  const handleDownload = (material: any) => {
    console.log('Downloading material:', material.title);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">সহায়ক সামগ্রী</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              বিদেশে পড়াশোনার জন্য প্রয়োজনীয় সকল গুরুত্বপূর্ণ ডকুমেন্ট এবং গাইডলাইন এক জায়গায়
            </p>
            <p className="text-lg opacity-90">
              আপনার স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তি হতে এবং ভিসা পেতে সাহায্য করার জন্য আমাদের বিশেষভাবে তৈরি করা সামগ্রী
            </p>
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">উপলব্ধ সামগ্রী</h2>
            <p className="text-lg text-gray-600">
              আপনার প্রয়োজন অনুযায়ী সামগ্রী দেখুন এবং ডাউনলোড করুন
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material) => (
              <Card key={material.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex-shrink-0">
                      {material.type === 'image' && material.thumbnail ? (
                        <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
                          <img 
                            src={material.thumbnail} 
                            alt={material.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          {getFileIcon(material.type)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                        {material.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        {material.fileSize} • {material.uploadDate}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {material.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                      onClick={() => handleView(material)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      দেখুন
                    </Button>
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleDownload(material)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      ডাউনলোড
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              আরো দেখুন
            </Button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              আরো সাহায্য প্রয়োজন?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              আমাদের অভিজ্ঞ কাউন্সেলরদের সাথে বিনামূল্যে পরামর্শ নিন
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              ফ্রি কনসাল্টেশন বুক করুন
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
