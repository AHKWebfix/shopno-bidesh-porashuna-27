
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data
  const blogPost = {
    id: 1,
    title: 'কানাডায় উচ্চশিক্ষার জন্য প্রয়োজনীয় প্রস্তুতি',
    content: `
      <p>কানাডা বিশ্বের অন্যতম জনপ্রিয় উচ্চশিক্ষার গন্তব্য। উন্নত শিক্ষাব্যবস্থা, গবেষণার সুযোগ এবং পড়াশোনা শেষে কাজের সুবিধার কারণে প্রতি বছর হাজারো বাংলাদেশি শিক্ষার্থী কানাডায় পড়তে যান।</p>

      <h2>প্রয়োজনীয় যোগ্যতা</h2>
      <p>কানাডায় উচ্চশিক্ষার জন্য আপনার প্রয়োজন হবে:</p>
      <ul>
        <li>ব্যাচেলর ডিগ্রির জন্য এইচএসসি বা সমমান পাস</li>
        <li>মাস্টার্স ডিগ্রির জন্য অনার্স ডিগ্রি</li>
        <li>ইংরেজি ভাষার দক্ষতা (IELTS/TOEFL)</li>
        <li>আর্থিক সামর্থ্যের প্রমাণ</li>
      </ul>

      <h2>ভাষার দক্ষতা</h2>
      <p>কানাডায় পড়াশোনার জন্য IELTS বা TOEFL স্কোর আবশ্যক। সাধারণত:</p>
      <ul>
        <li>আন্ডারগ্র্যাজুয়েট: IELTS 6.0-6.5 (কোন ব্যান্ডে 6.0 এর কম নয়)</li>
        <li>গ্র্যাজুয়েট: IELTS 6.5-7.0 (কোন ব্যান্ডে 6.0 এর কম নয়)</li>
      </ul>

      <h2>আর্থিক প্রস্তুতি</h2>
      <p>কানাডায় পড়াশোনার খরচ নির্ভর করে বিশ্ববিদ্যালয় ও কোর্সের উপর:</p>
      <ul>
        <li>টিউশন ফি: বছরে $15,000-$35,000 CAD</li>
        <li>বাসা ভাড়া ও খাওয়াদাওয়া: বছরে $10,000-$15,000 CAD</li>
        <li>অন্যান্য খরচ: বছরে $3,000-$5,000 CAD</li>
      </ul>

      <h2>আবেদন প্রক্রিয়া</h2>
      <p>কানাডায় পড়াশোনার জন্য আবেদন প্রক্রিয়া সাধারণত নিম্নরূপ:</p>
      <ol>
        <li>বিশ্ববিদ্যালয় ও কোর্স নির্বাচন</li>
        <li>অনলাইনে আবেদন জমা</li>
        <li>প্রয়োজনীয় কাগজপত্র জমা</li>
        <li>ইন্টারভিউ (যদি প্রয়োজন হয়)</li>
        <li>অফার লেটার পাওয়া</li>
        <li>স্টুডেন্ট ভিসার জন্য আবেদন</li>
      </ol>

      <h2>স্কলারশিপের সুযোগ</h2>
      <p>কানাডিয়ান বিশ্ববিদ্যালয়গুলো বিভিন্ন ধরনের স্কলারশিপ প্রদান করে। এর মধ্যে রয়েছে:</p>
      <ul>
        <li>মেরিট বেসড স্কলারশিপ</li>
        <li>নিড বেসড স্কলারশিপ</li>
        <li>রিসার্চ অ্যাসিস্ট্যান্টশিপ</li>
        <li>টিচিং অ্যাসিস্ট্যান্টশিপ</li>
      </ul>

      <h2>পরামর্শ</h2>
      <p>কানাডায় উচ্চশিক্ষার জন্য সঠিক পরিকল্পনা ও প্রস্তুতি অত্যন্ত গুরুত্বপূর্ণ। আমাদের অভিজ্ঞ পরামর্শদাতারা আপনাকে সম্পূর্ণ প্রক্রিয়ায় সাহায্য করতে পারেন।</p>
    `,
    author: 'Admin',
    date: '২০২৪-০১-১৫',
    readTime: '৫ মিনিট',
    category: 'কানাডা',
    tags: ['কানাডা', 'উচ্চশিক্ষা', 'স্টুডেন্ট ভিসা', 'IELTS'],
    image: '/placeholder.svg'
  };

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Header */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="outline" className="mb-6 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ব্লগে ফিরে যান
            </Button>
          </Link>
        </div>
      </section>

      {/* Article */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="overflow-hidden shadow-2xl border-0">
            {/* Featured Image */}
            <div className="aspect-video overflow-hidden">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-6 lg:p-8">
              {/* Category & Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
                {blogPost.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {blogPost.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <User size={16} />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Share Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">শেয়ার করুন</h3>
                  <div className="flex items-center space-x-3">
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
