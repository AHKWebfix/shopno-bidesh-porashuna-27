import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Globe, GraduationCap, Users, Star, Plane, FileText, MapPin, Award, Target, TrendingUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component is rendering...');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: ''
  });
  
  const { toast } = useToast();

  useEffect(() => {
    console.log('Index component mounted successfully');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    if (!formData.name || !formData.phone || !formData.country) {
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
      phone: '',
      email: '',
      country: ''
    });
  };

  console.log('About to render Index JSX...');

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight" style={{
                lineHeight: '1.1'
              }}>
                বিদেশে পড়াশোনা 
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent block mt-2">
                  এখন আরও সহজ!
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 leading-relaxed" style={{
                lineHeight: '1.5'
              }}>
                অস্ট্রেলিয়া, যুক্তরাজ্য, মালয়েশিয়া, নিউজিল্যান্ডে ভর্তি ও ভিসা সাপোর্ট
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                পান ১০০% ফ্রি পরামর্শ ও সম্পূর্ণ সাপোর্ট
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  ফ্রি পরামর্শ নিন
                </Button>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300">
                    আরও জানুন
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-white shadow-2xl border-0 animate-fade-in overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 h-2"></div>
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">ফ্রি কনসাল্টেশনের জন্য যোগাযোগ করুন</h3>
                  <p className="text-gray-600">মাত্র ৩০ সেকেন্ডে ফর্ম পূরণ করুন</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">আপনার নাম</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="পূর্ণ নাম লিখুন" 
                      value={formData.name} 
                      onChange={e => setFormData({
                        ...formData,
                        name: e.target.value
                      })} 
                      className="mt-2 text-lg py-3 border-2 focus:border-purple-500" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">মোবাইল নাম্বার</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+৮৮০ ১৭xxxxxxxx" 
                      value={formData.phone} 
                      onChange={e => setFormData({
                        ...formData,
                        phone: e.target.value
                      })} 
                      className="mt-2 text-lg py-3 border-2 focus:border-purple-500" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">ইমেইল (ঐচ্ছিক)</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={e => setFormData({
                        ...formData,
                        email: e.target.value
                      })} 
                      className="mt-2 text-lg py-3 border-2 focus:border-purple-500" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="country" className="text-gray-700 font-medium">যেতে চান কোন দেশে?</Label>
                    <Select value={formData.country} onValueChange={value => setFormData({
                      ...formData,
                      country: value
                    })}>
                      <SelectTrigger className="mt-2 text-lg py-3 border-2 focus:border-purple-500">
                        <SelectValue placeholder="দেশ নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="australia">অস্ট্রেলিয়া</SelectItem>
                        <SelectItem value="uk">যুক্তরাজ্য</SelectItem>
                        <SelectItem value="malaysia">মালয়েশিয়া</SelectItem>
                        <SelectItem value="newzealand">নিউজিল্যান্ড</SelectItem>
                        <SelectItem value="other">অন্যান্য</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    আবেদন জমা দিন
                  </Button>
                </form>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  ✓ সম্পূর্ণ ফ্রি সেবা ✓ কোন লুকানো খরচ নেই
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 animate-float hidden lg:block">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <Plane className="text-white" size={32} />
          </div>
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce hidden lg:block" style={{
          animationDelay: '1s'
        }}>
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <Globe className="text-white" size={24} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent mb-6">আমাদের সেবাসমূহ</h2>
            <p className="text-xl text-gray-600">আপনার সফল ভবিষ্যতের জন্য সম্পূর্ণ সাপোর্ট</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <GraduationCap size={48} className="text-white" />,
            title: "বিশ্ববিদ্যালয়ে ভর্তি সহায়তা",
            description: "বিশ্বের শীর্ষ বিশ্ববিদ্যালয়গুলোতে ভর্তির সম্পূর্ণ প্রক্রিয়া",
            gradient: "from-purple-600 to-pink-600"
          }, {
            icon: <FileText size={48} className="text-white" />,
            title: "ভিসা প্রসেসিং",
            description: "ভিসা আবেদন থেকে অনুমোদন পর্যন্ত সম্পূর্ণ সহায্যতা",
            gradient: "from-blue-600 to-cyan-500"
          }, {
            icon: <Star size={48} className="text-white" />,
            title: "স্কলারশিপ গাইডলাইন",
            description: "বিভিন্ন স্কলারশিপের তথ্য ও আবেদনে সাহায্য",
            gradient: "from-green-500 to-teal-500"
          }, {
            icon: <MapPin size={48} className="text-white" />,
            title: "হোস্টেল/অ্যাকমোডেশন সাপোর্ট",
            description: "আবাসন ব্যবস্থা ও প্রাথমিক সেটেলমেন্ট সাপোর্ট",
            gradient: "from-orange-500 to-red-500"
          }].map((service, index) => <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent mb-6">আমাদের অংশীদার বিশ্ববিদ্যালয়সমূহ</h2>
            <p className="text-xl text-gray-600">বিশ্বের শীর্ষ বিশ্ববিদ্যালয়গুলোর সাথে আমাদের দীর্ঘমেয়াদী সম্পর্ক</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            name: "University of Melbourne",
            country: "অস্ট্রেলিয়া",
            flag: "🇦🇺",
            gradient: "from-blue-500 to-green-500"
          }, {
            name: "University of Oxford",
            country: "যুক্তরাজ্য",
            flag: "🇬🇧",
            gradient: "from-purple-500 to-blue-500"
          }, {
            name: "University of Malaya",
            country: "মালয়েশিয়া",
            flag: "🇲🇾",
            gradient: "from-green-500 to-teal-500"
          }, {
            name: "University of Auckland",
            country: "নিউজিল্যান্ড",
            flag: "🇳🇿",
            gradient: "from-blue-500 to-purple-500"
          }].map((uni, index) => <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${uni.gradient}`}></div>
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${uni.gradient} rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="text-white" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">{uni.flag}</div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{uni.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{uni.country}</p>
                  <span className={`text-xs bg-gradient-to-r ${uni.gradient} text-white px-3 py-1 rounded-full shadow-md`}>Official Partner</span>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">আমাদের সফল শিক্ষার্থীদের কথা</h2>
            <p className="text-xl opacity-90">যারা আমাদের সাথে তাদের স্বপ্ন পূরণ করেছেন</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: "রাহুল আহমেদ",
            university: "University of Melbourne",
            country: "অস্ট্রেলিয়া",
            quote: "MH Education এর সাহায্যে আমি অস্ট্রেলিয়ার টপ ইউনিভার্সিটিতে ভর্তি হতে পেরেছি। তাদের গাইডেন্স ছাড়া এটা সম্ভব হতো না।",
            rating: 5
          }, {
            name: "ফাতিমা খান",
            university: "University of Oxford",
            country: "যুক্তরাজ্য",
            quote: "সম্পূর্ণ ফ্রি সেবা পেয়ে আমি অবাক হয়েছি। ভিসা প্রসেস থেকে শুরু করে যুক্তরাজ্যে পৌঁছানো পর্যন্ত তারা পাশে ছিল।",
            rating: 5
          }, {
            name: "মোহাম্মদ হাসান",
            university: "University of Malaya",
            country: "মালয়েশিয়া",
            quote: "মালয়েশিয়ায় স্কলারশিপ নিয়ে পড়াশোনার স্বপ্ন ছিল। MH Education সেই স্বপ্ন বাস্তবায়নে অসাধারণ সাহায্য করেছে।",
            rating: 5
          }].map((testimonial, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-white/80 text-sm">{testimonial.university}</p>
                      <p className="text-white/70 text-xs">{testimonial.country}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={16} />)}
                  </div>
                  <p className="italic text-white/90 leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent mb-6">প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
            <p className="text-xl text-gray-600">আপনার সাধারণ প্রশ্নের উত্তর</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md border-l-4 border-purple-500">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-purple-50">
                  আপনাদের সেবা কি সত্যিই ফ্রি?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  হ্যাঁ, আমাদের প্রাথমিক পরামর্শ ও গাইডেন্স সম্পূর্ণ ফ্রি। আমরা শুধুমাত্র সফল ভর্তির পর ইউনিভার্সিটি থেকে কমিশন পাই।
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md border-l-4 border-blue-500">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  কোন কোন দেশে পাঠানো হয়?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  আমরা অস্ট্রেলিয়া, যুক্তরাজ্য, মালয়েশিয়া, নিউজিল্যান্ড সহ আরও অনেক দেশে শিক্ষার্থী পাঠিয়ে থাকি।
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md border-l-4 border-green-500">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-green-50">
                  ভিসা রিজেক্ট হলে কী হবে?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  আমাদের ভিসা সাকসেস রেট ৯৫%। তবে কোনো কারণে রিজেক্ট হলে আমরা বিনামূল্যে পুনরায় আবেদন করি বা বিকল্প সমাধান দিই।
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md border-l-4 border-orange-500">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-orange-50">
                  কতদিন সময় লাগে পুরো প্রক্রিয়ায়?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  সাধারণত ৩-৬ মাস সময় লাগে। তবে কোর্স ও দেশভেদে এই সময় কম-বেশি হতে পারে। আমরা দ্রুততম প্রক্রিয়ার চেষ্টা করি।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md border-l-4 border-pink-500">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-pink-50">
                  মালয়েশিয়া ও নিউজিল্যান্ডে পড়াশোনার খরচ কেমন?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  মালয়েশিয়ায় বছরে ৩-৮ লক্ষ টাকা এবং নিউজিল্যান্ডে ১২-২০ লক্ষ টাকা খরচ হতে পারে। এটি কোর্স ও বিশ্ববিদ্যালয়ের উপর নির্ভর করে।
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
