
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Mail, Calendar, User } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const LeadDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');

  // Mock data for demonstration
  const lead = {
    id: id,
    name: 'আহমেদ রহমান',
    mobile: '০১৭১২৩৪৫৬৭৮',
    email: 'ahmed@example.com',
    country: 'অস্ট্রেলিয়া',
    status: 'নতুন',
    date: '২০২৪-০১-১৫',
    source: 'ওয়েবসাইট',
    assignedTo: 'না নির্ধারিত',
    notes: 'ইঞ্জিনিয়ারিং প্রোগ্রামে আগ্রহী। IELTS পরীক্ষা দেওয়া হয়নি।'
  };

  const comments = [
    {
      id: 1,
      author: 'অ্যাডমিন',
      date: '২০২৪-০১-১৫ ১০:৩০',
      text: 'প্রাথমিক যোগাযোগ করা হয়েছে। শিক্ষার্থী অস্ট্রেলিয়ায় ইঞ্জিনিয়ারিং পড়তে চায়।'
    },
    {
      id: 2,
      author: 'কাউন্সেলর',
      date: '২০২৪-০১-১৫ ১৪:১৫',
      text: 'IELTS প্রস্তুতির জন্য গাইডলাইন দেওয়া হয়েছে। পরবর্তী ফলো-আপ ৩ দিন পর।'
    }
  ];

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log('Adding comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen font-bangla bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>
                <ArrowLeft size={20} className="mr-2" />
                ব্যাক
              </Button>
              <h1 className="text-2xl font-bold text-gray-800">লিড বিস্তারিত</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lead Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>লিড তথ্য</span>
                  <Badge variant="default">{lead.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <User className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">নাম</p>
                      <p className="font-medium">{lead.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">মোবাইল</p>
                      <p className="font-medium">{lead.mobile}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">ইমেইল</p>
                      <p className="font-medium">{lead.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-gray-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">তারিখ</p>
                      <p className="font-medium">{lead.date}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">পছন্দের দেশ</p>
                  <p className="font-medium">{lead.country}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">নোটস</p>
                  <p className="text-gray-800">{lead.notes}</p>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle>মন্তব্য ও ফলো-আপ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-l-4 border-brand-blue pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-brand-blue">{comment.author}</span>
                      <span className="text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <Textarea
                    placeholder="নতুন মন্তব্য যোগ করুন..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-3"
                  />
                  <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                    মন্তব্য যোগ করুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>দ্রুত কার্যক্রম</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  <Phone size={16} className="mr-2" />
                  কল করুন
                </Button>
                <Button className="w-full" variant="outline">
                  <Mail size={16} className="mr-2" />
                  ইমেইল পাঠান
                </Button>
                <Button className="w-full" variant="outline">
                  স্ট্যাটাস আপডেট করুন
                </Button>
                <Button className="w-full" variant="outline">
                  কাউন্সেলর নির্ধারণ করুন
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>লিড তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">সোর্স</p>
                  <p className="font-medium">{lead.source}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">নির্ধারিত কাউন্সেলর</p>
                  <p className="font-medium">{lead.assignedTo}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetail;
