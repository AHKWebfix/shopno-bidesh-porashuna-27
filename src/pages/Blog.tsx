
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Mock blog data
  const blogPosts = [{
    id: 1,
    title: 'কানাডায় উচ্চশিক্ষার জন্য প্রয়োজনীয় প্রস্তুতি',
    excerpt: 'কানাডায় পড়াশোনার জন্য কী কী প্রয়োজন এবং কীভাবে প্রস্তুতি নিবেন তা নিয়ে বিস্তারিত আলোচনা।',
    author: 'Admin',
    date: '২০২৪-০১-১৫',
    readTime: '৫ মিনিট',
    category: 'কানাডা',
    image: '/placeholder.svg',
    featured: true
  }, {
    id: 2,
    title: 'IELTS পরীক্ষার প্রস্তুতি গাইড',
    excerpt: 'IELTS পরীক্ষায় ভালো স্কোর পাওয়ার জন্য কার্যকর টিপস এবং কৌশল।',
    author: 'Admin',
    date: '২০২৪-০১-১০',
    readTime: '৮ মিনিট',
    category: 'পরীক্ষা প্রস্তুতি',
    image: '/placeholder.svg',
    featured: false
  }, {
    id: 3,
    title: 'অস্ট্রেলিয়ায় স্কলারশিপের সুযোগ',
    excerpt: 'অস্ট্রেলিয়ায় বিভিন্ন বিশ্ববিদ্যালয়ের স্কলারশিপ প্রোগ্রাম সম্পর্কে জানুন।',
    author: 'Admin',
    date: '২০২৪-০১-০৫',
    readTime: '৬ মিনিট',
    category: 'অস্ট্রেলিয়া',
    image: '/placeholder.svg',
    featured: false
  }, {
    id: 4,
    title: 'যুক্তরাজ্যে স্টুডেন্ট ভিসা আবেদন প্রক্রিয়া',
    excerpt: 'যুক্তরাজ্যে স্টুডেন্ট ভিসার জন্য আবেদন প্রক্রিয়া এবং প্রয়োজনীয় কাগজপত্র।',
    author: 'Admin',
    date: '২০২৩-১২-২৮',
    readTime: '৭ মিনিট',
    category: 'যুক্তরাজ্য',
    image: '/placeholder.svg',
    featured: false
  }, {
    id: 5,
    title: 'আমেরিকায় উচ্চশিক্ষার খরচ',
    excerpt: 'আমেরিকায় পড়াশোনার খরচ এবং খরচ কমানোর উপায় সম্পর্কে বিস্তারিত।',
    author: 'Admin',
    date: '২০২৩-১২-২০',
    readTime: '১০ মিনিট',
    category: 'আমেরিকা',
    image: '/placeholder.svg',
    featured: false
  }, {
    id: 6,
    title: 'জার্মানিতে ফ্রি শিক্ষার সুযোগ',
    excerpt: 'জার্মানিতে ফ্রি শিক্ষার সুযোগ এবং কীভাবে আবেদন করবেন তা জানুন।',
    author: 'Admin',
    date: '২০২৩-১২-১৫',
    readTime: '৯ মিনিট',
    category: 'জার্মানি',
    image: '/placeholder.svg',
    featured: false
  }];

  const categories = ['সব', 'কানাডা', 'অস্ট্রেলিয়া', 'যুক্তরাজ্য', 'আমেরিকা', 'জার্মানি', 'পরীক্ষা প্রস্তুতি'];
  const [selectedCategory, setSelectedCategory] = React.useState('সব');
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const filteredPosts = selectedCategory === 'সব' ? regularPosts : regularPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Hero Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              আমাদের ব্লগ
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
              বিদেশে উচ্চশিক্ষা সম্পর্কে সর্বশেষ তথ্য, টিপস এবং গাইডলাইন পান আমাদের ব্লগ থেকে।
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">বিশেষ পোস্ট</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      বিশেষ
                    </span>
                    <span className="bg-brand-green/10 text-brand-green px-2 py-1 rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                        বিস্তারিত পড়ুন
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"} 
                onClick={() => setSelectedCategory(category)} 
                className={`${selectedCategory === category ? 'bg-brand-blue text-white' : 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-brand-green/10 text-brand-green px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button size="sm" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                        পড়ুন
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
