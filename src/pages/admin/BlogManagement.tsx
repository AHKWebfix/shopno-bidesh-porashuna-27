
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import BlogPostModal from '@/components/admin/BlogPostModal';
import CategoryModal from '@/components/admin/CategoryModal';

const BlogManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock categories data
  const [categories, setCategories] = useState([
    'কানাডা',
    'অস্ট্রেলিয়া',
    'যুক্তরাজ্য',
    'আমেরিকা',
    'জার্মানি',
    'পরীক্ষা প্রস্তুতি'
  ]);

  // Mock blog posts data
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'কানাডায় উচ্চশিক্ষার জন্য প্রয়োজনীয় প্রস্তুতি',
      excerpt: 'কানাডায় পড়াশোনার জন্য কী কী প্রয়োজন এবং কীভাবে প্রস্তুতি নিবেন...',
      author: 'Admin',
      category: 'কানাডা',
      status: 'published',
      publishDate: '২০২৪-০১-১৫',
      views: 1245,
      featured: true
    },
    {
      id: 2,
      title: 'IELTS পরীক্ষার প্রস্তুতি গাইড',
      excerpt: 'IELTS পরীক্ষায় ভালো স্কোর পাওয়ার জন্য কার্যকর টিপস...',
      author: 'Admin',
      category: 'পরীক্ষা প্রস্তুতি',
      status: 'draft',
      publishDate: '২০২৪-০১-১০',
      views: 892,
      featured: false
    },
    {
      id: 3,
      title: 'অস্ট্রেলিয়ায় স্কলারশিপের সুযোগ',
      excerpt: 'অস্ট্রেলিয়ায় বিভিন্ন বিশ্ববিদ্যালয়ের স্কলারশিপ প্রোগ্রাম...',
      author: 'Admin',
      category: 'অস্ট্রেলিয়া',
      status: 'published',
      publishDate: '২০২৪-০১-০৫',
      views: 1567,
      featured: false
    }
  ]);

  const handleCreatePost = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDeletePost = (postId: number) => {
    if (confirm('আপনি কি নিশ্চিত যে এই পোস্টটি মুছে দিতে চান?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== postId));
    }
  };

  const handleAddCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  const handleDeleteCategory = (categoryToDelete: string) => {
    if (confirm('আপনি কি নিশ্চিত যে এই ক্যাটাগরিটি মুছে দিতে চান?')) {
      setCategories(categories.filter(cat => cat !== categoryToDelete));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'প্রকাশিত';
      case 'draft': return 'খসড়া';
      case 'archived': return 'সংরক্ষিত';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">ব্লগ ম্যানেজমেন্ট</h1>
            <p className="text-gray-600">ব্লগ পোস্ট এবং ক্যাটাগরি পরিচালনা করুন</p>
          </div>

          {/* Header Actions */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="পোস্ট খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">সব স্ট্যাটাস</option>
                <option value="published">প্রকাশিত</option>
                <option value="draft">খসড়া</option>
                <option value="archived">সংরক্ষিত</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button 
                onClick={() => setIsCategoryModalOpen(true)} 
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                ক্যাটাগরি ম্যানেজ
              </Button>
              <Button 
                onClick={handleCreatePost} 
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                নতুন পোস্ট
              </Button>
            </div>
          </div>

          {/* Blog Posts Table */}
          <Card>
            <CardHeader>
              <CardTitle>ব্লগ পোস্ট তালিকা</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm">শিরোনাম</th>
                      <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm hidden md:table-cell">ক্যাটাগরি</th>
                      <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm">স্ট্যাটাস</th>
                      <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm hidden lg:table-cell">প্রকাশের তারিখ</th>
                      <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm hidden lg:table-cell">ভিউ</th>
                      <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-600 text-sm">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-2 sm:px-4">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">{post.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-500 truncate max-w-xs">{post.excerpt}</p>
                            {post.featured && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                                বিশেষ
                              </span>
                            )}
                            {/* Show category on mobile */}
                            <div className="md:hidden mt-1">
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 sm:px-4 hidden md:table-cell">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                            {post.category}
                          </span>
                        </td>
                        <td className="py-4 px-2 sm:px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(post.status)}`}>
                            {getStatusText(post.status)}
                          </span>
                        </td>
                        <td className="py-4 px-2 sm:px-4 text-sm text-gray-600 hidden lg:table-cell">{post.publishDate}</td>
                        <td className="py-4 px-2 sm:px-4 text-sm text-gray-600 hidden lg:table-cell">{post.views.toLocaleString()}</td>
                        <td className="py-4 px-2 sm:px-4">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditPost(post)}
                              className="p-1 sm:p-2"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-600 hover:text-red-700 p-1 sm:p-2"
                            >
                              <Trash2 className="w-3 h-3" />
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
        </div>
      </div>

      {/* Blog Post Modal */}
      {isModalOpen && (
        <BlogPostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          post={editingPost}
          onSave={(postData) => {
            console.log('Saving post:', postData);
            setIsModalOpen(false);
          }}
        />
      )}

      {/* Category Management Modal */}
      {isCategoryModalOpen && (
        <CategoryModal
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
          categories={categories}
          onAddCategory={handleAddCategory}
          onDeleteCategory={handleDeleteCategory}
        />
      )}
    </div>
  );
};

export default BlogManagement;
