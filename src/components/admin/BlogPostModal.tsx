
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Upload, Eye } from 'lucide-react';

const BlogPostModal = ({ isOpen, onClose, post, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    featured: false,
    status: 'draft',
    featuredImage: ''
  });

  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        category: post.category || '',
        tags: post.tags?.join(', ') || '',
        metaTitle: post.metaTitle || '',
        metaDescription: post.metaDescription || '',
        metaKeywords: post.metaKeywords || '',
        featured: post.featured || false,
        status: post.status || 'draft',
        featuredImage: post.featuredImage || ''
      });
    }
  }, [post]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const categories = [
    'কানাডা', 'অস্ট্রেলিয়া', 'যুক্তরাজ্য', 'আমেরিকা', 
    'জার্মানি', 'পরীক্ষা প্রস্তুতি', 'স্কলারশিপ', 'ভিসা প্রক্রিয়া'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {post ? 'পোস্ট সম্পাদনা' : 'নতুন পোস্ট তৈরি'}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              {[
                { id: 'content', label: 'কন্টেন্ট' },
                { id: 'seo', label: 'SEO সেটিংস' },
                { id: 'settings', label: 'পোস্ট সেটিংস' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="p-6 space-y-6">
              {/* Content Tab */}
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      পোস্ট শিরোনাম *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="পোস্টের শিরোনাম লিখুন"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      সংক্ষিপ্ত বিবরণ *
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="পোস্টের সংক্ষিপ্ত বিবরণ লিখুন"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ফিচার্ড ইমেজ
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <Button type="button" variant="outline">
                            ইমেজ আপলোড করুন
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          JPG, PNG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      পোস্ট কন্টেন্ট *
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={15}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                      placeholder="পোস্টের বিস্তারিত কন্টেন্ট লিখুন (HTML ট্যাগ ব্যবহার করতে পারেন)"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      HTML ট্যাগ ব্যবহার করে কন্টেন্ট ফরম্যাট করতে পারেন (h1, h2, p, ul, ol, li, strong, em)
                    </p>
                  </div>
                </div>
              )}

              {/* SEO Tab */}
              {activeTab === 'seo' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      মেটা টাইটেল
                    </label>
                    <input
                      type="text"
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="SEO এর জন্য মেটা টাইটেল (৬০ অক্ষরের মধ্যে)"
                      maxLength={60}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.metaTitle.length}/60 অক্ষর
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      মেটা ডিসক্রিপশন
                    </label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="SEO এর জন্য মেটা ডিসক্রিপশন (১৬০ অক্ষরের মধ্যে)"
                      maxLength={160}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.metaDescription.length}/160 অক্ষর
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      মেটা কিওয়ার্ডস
                    </label>
                    <input
                      type="text"
                      name="metaKeywords"
                      value={formData.metaKeywords}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="কিওয়ার্ডগুলো কমা দিয়ে আলাদা করুন"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      উদাহরণ: কানাডা, উচ্চশিক্ষা, স্টুডেন্ট ভিসা
                    </p>
                  </div>

                  <Card className="bg-blue-50">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-blue-800 mb-2">SEO পূর্বরূপ</h4>
                      <div className="space-y-1">
                        <h3 className="text-lg text-blue-600 hover:underline cursor-pointer">
                          {formData.metaTitle || formData.title || 'পোস্ট টাইটেল'}
                        </h3>
                        <p className="text-sm text-green-600">https://yoursite.com/blog/post-slug</p>
                        <p className="text-sm text-gray-600">
                          {formData.metaDescription || formData.excerpt || 'পোস্টের ডিসক্রিপশন এখানে দেখানো হবে...'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ক্যাটাগরি *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ট্যাগস
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="ট্যাগগুলো কমা দিয়ে আলাদা করুন"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      উদাহরণ: কানাডা, ভিসা, IELTS
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      পোস্ট স্ট্যাটাস
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="draft">খসড়া</option>
                      <option value="published">প্রকাশিত</option>
                      <option value="archived">সংরক্ষিত</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                      ফিচার্ড পোস্ট হিসেবে চিহ্নিত করুন
                    </label>
                  </div>

                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-800 mb-2">প্রকাশনা তথ্য</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>স্ট্যাটাস: <span className="font-medium">{formData.status === 'draft' ? 'খসড়া' : formData.status === 'published' ? 'প্রকাশিত' : 'সংরক্ষিত'}</span></p>
                        <p>ফিচার্ড: <span className="font-medium">{formData.featured ? 'হ্যাঁ' : 'না'}</span></p>
                        <p>প্রকাশের তারিখ: <span className="font-medium">এখনই</span></p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-2">
              <Button type="button" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                পূর্বরূপ
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <Button type="button" variant="outline" onClick={onClose}>
                বাতিল
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                {post ? 'আপডেট করুন' : 'প্রকাশ করুন'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostModal;
