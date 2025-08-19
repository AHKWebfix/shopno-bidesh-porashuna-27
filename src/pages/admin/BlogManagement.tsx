
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminHeader from "@/components/admin/AdminHeader";
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import BlogPostModal from '@/components/admin/BlogPostModal';

const BlogManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

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
      <AdminHeader title="ব্লগ ম্যানেজমেন্ট" subtitle="ব্লগ পোস্ট তৈরি ও পরিচালনা করুন" />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="পোস্ট খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">সব স্ট্যাটাস</option>
                <option value="published">প্রকাশিত</option>
                <option value="draft">খসড়া</option>
                <option value="archived">সংরক্ষিত</option>
              </select>
            </div>
            <Button onClick={handleCreatePost} className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              নতুন পোস্ট
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">মোট পোস্ট</p>
                    <p className="text-3xl font-bold text-gray-900">{blogPosts.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Edit className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">প্রকাশিত</p>
                    <p className="text-3xl font-bold text-green-600">
                      {blogPosts.filter(post => post.status === 'published').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">খসড়া</p>
                    <p className="text-3xl font-bold text-yellow-600">
                      {blogPosts.filter(post => post.status === 'draft').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Edit className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">মোট ভিউ</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {blogPosts.reduce((total, post) => total + post.views, 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Blog Posts Table */}
          <Card>
            <CardHeader>
              <CardTitle>ব্লগ পোস্ট তালিকা</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">শিরোনাম</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">ক্যাটাগরি</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">স্ট্যাটাস</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">প্রকাশের তারিখ</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">ভিউ</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-1">{post.title}</h3>
                            <p className="text-sm text-gray-500 truncate max-w-xs">{post.excerpt}</p>
                            {post.featured && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                                বিশেষ
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                            {post.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(post.status)}`}>
                            {getStatusText(post.status)}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">{post.publishDate}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{post.views.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditPost(post)}
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-600 hover:text-red-700"
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
            // Handle save logic here
            console.log('Saving post:', postData);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default BlogManagement;
