
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "সব ফিল্ড পূরণ করুন",
        description: "অনুগ্রহ করে সব তথ্য দিন",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "ধন্যবাদ!",
      description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              যোগাযোগ করুন
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              আপনার যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">আমাদের লিখুন</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">আপনার নাম *</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="পূর্ণ নাম লিখুন" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        className="mt-2" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">মোবাইল নাম্বার *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+৮৮০ ১৭xxxxxxxx" 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})} 
                        className="mt-2" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">ইমেইল ঠিকানা *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})} 
                      className="mt-2" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">বিষয়</Label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="আপনার প্রশ্নের বিষয়" 
                      value={formData.subject} 
                      onChange={e => setFormData({...formData, subject: e.target.value})} 
                      className="mt-2" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">বার্তা *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="আপনার প্রশ্ন বা মন্তব্য লিখুন..." 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})} 
                      className="mt-2 min-h-[120px]" 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-600 text-lg py-4 rounded-full">
                    বার্তা পাঠান
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Phone className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">ফোন নাম্বার</h3>
                      <p className="text-gray-600">+৮৮০ ১৭xxxxxxxx</p>
                      <p className="text-gray-600">+৮৮০ ১৮xxxxxxxx</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                      <Mail className="text-brand-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">ইমেইল</h3>
                      <p className="text-gray-600">info@mheducation.com</p>
                      <p className="text-gray-600">support@mheducation.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">ঠিকানা</h3>
                      <p className="text-gray-600">১২৩ গুলশান এভিনিউ</p>
                      <p className="text-gray-600">ঢাকা - ১২১২, বাংলাদেশ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Clock className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">অফিস টাইম</h3>
                      <p className="text-gray-600">রবি - বৃহস্পতি: ৯:০০ - ৬:০০</p>
                      <p className="text-gray-600">শুক্রবার: ৯:০০ - ৫:০০</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-brand-green to-brand-blue text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">হোয়াটসঅ্যাপ</h3>
                      <p className="opacity-90">তাৎক্ষণিক সাহায্যের জন্য</p>
                      <Button variant="outline" className="mt-2 bg-white text-brand-blue border-white hover:bg-gray-100">
                        এখনই চ্যাট করুন
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">আমাদের অবস্থান</h2>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 text-lg">গুগল ম্যাপ এখানে এমবেড করা হবে</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
