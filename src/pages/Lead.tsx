
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Lead = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    referenceCode: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.country) {
      toast({
        title: "সব ফিল্ড পূরণ করুন",
        description: "নাম, মোবাইল, ইমেইল এবং দেশ অবশ্যই দিতে হবে",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "সফলভাবে জমা হয়েছে!",
      description: "লিড সফলভাবে জমা দেওয়া হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
    });
    
    setFormData({ name: '', phone: '', email: '', country: '', referenceCode: '' });
  };

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              লিড জমা দিন
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              আপনার পরিচিত কোনো শিক্ষার্থী বিদেশে পড়তে আগ্রহী? তাদের তথ্য দিন এবং 
              কমিশন পান সফল ভর্তির জন্য।
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">শিক্ষার্থীর তথ্য</h2>
                  <p className="text-gray-600">নিচের ফর্মটি পূরণ করে লিড জমা দিন</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">শিক্ষার্থীর নাম *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="পূর্ণ নাম লিখুন"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2 text-lg py-3"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">মোবাইল নাম্বার *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+৮৮০ ১৭xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-2 text-lg py-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">ইমেইল *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="student@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-2 text-lg py-3"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-gray-700 font-medium">যেতে চান কোন দেশে? *</Label>
                    <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                      <SelectTrigger className="mt-2 text-lg py-3">
                        <SelectValue placeholder="দেশ নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="australia">অস্ট্রেলিয়া</SelectItem>
                        <SelectItem value="canada">কানাডা</SelectItem>
                        <SelectItem value="uk">যুক্তরাজ্য</SelectItem>
                        <SelectItem value="usa">যুক্তরাষ্ট্র</SelectItem>
                        <SelectItem value="germany">জার্মানি</SelectItem>
                        <SelectItem value="newzealand">নিউজিল্যান্ড</SelectItem>
                        <SelectItem value="other">অন্যান্য</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="referenceCode" className="text-gray-700 font-medium">রেফারেন্স কোড (ঐচ্ছিক)</Label>
                    <Input
                      id="referenceCode"
                      type="text"
                      placeholder="আপনার রেফারেন্স কোড (যদি থাকে)"
                      value={formData.referenceCode}
                      onChange={(e) => setFormData({...formData, referenceCode: e.target.value})}
                      className="mt-2 text-lg py-3"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      রেফারেন্স কোড থাকলে কমিশন ট্র্যাক করা সহজ হবে
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-green hover:bg-green-600 text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    লিড জমা দিন
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">গুরুত্বপূর্ণ তথ্য:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• সফল ভর্তির জন্য আকর্ষণীয় কমিশন পাবেন</li>
                    <li>• আমরা ২৪ ঘন্টার মধ্যে শিক্ষার্থীর সাথে যোগাযোগ করব</li>
                    <li>• সম্পূর্ণ প্রক্রিয়া ট্র্যাক করতে পারবেন</li>
                    <li>• কোনো লুকানো খরচ নেই</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">কেন আমাদের সাথে কাজ করবেন?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-brand-blue" size={48} />,
                title: "উচ্চ কমিশন",
                description: "প্রতিটি সফল ভর্তির জন্য আকর্ষণীয় কমিশন পান"
              },
              {
                icon: <Users className="text-brand-green" size={48} />,
                title: "বিশ্বস্ত সেবা",
                description: "১০+ বছরের অভিজ্ঞতা ও হাজারো সন্তুষ্ট শিক্ষার্থী"
              },
              {
                icon: <CheckCircle className="text-brand-orange" size={48} />,
                title: "স্বচ্ছতা",
                description: "সম্পূর্ণ প্রক্রিয়া ট্র্যাক করুন ও রিপোর্ট পান"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lead;
