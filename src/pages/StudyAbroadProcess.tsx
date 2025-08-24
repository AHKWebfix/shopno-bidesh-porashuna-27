import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, FileText, GraduationCap, Globe, Shield, Plane, Clock, Award, Target, MapPin, Heart, CreditCard, Stethoscope, BookOpen, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const StudyAbroadProcess = () => {
  const preDepartureServices = [{
    icon: <GraduationCap className="text-purple-600" size={32} />,
    title: "বিশ্ববিদ্যালয় ও কোর্স নির্বাচনে সহায়তা",
    description: "আপনার পছন্দ ও যোগ্যতা অনুযায়ী সঠিক বিশ্ববিদ্যালয় ও কোর্স নির্বাচন"
  }, {
    icon: <FileText className="text-blue-600" size={32} />,
    title: "বিশ্ববিদ্যালয়ে আবেদন জমা দেওয়া",
    description: "আপনার পক্ষে বিশ্ববিদ্যালয়ে আবেদনপত্র জমা দেওয়া"
  }, {
    icon: <Award className="text-green-600" size={32} />,
    title: "অফার লেটার সংগ্রহ",
    description: "বিশ্ববিদ্যালয় থেকে অফার লেটার সংগ্রহ করা"
  }, {
    icon: <Globe className="text-indigo-600" size={32} />,
    title: "ভিসা আবেদন প্রক্রিয়া পরিচালনা (Subclass 500)",
    description: "সম্পূর্ণ ভিসা আবেদন প্রক্রিয়া পরিচালনা"
  }, {
    icon: <FileText className="text-cyan-600" size={32} />,
    title: "GTE স্টেটমেন্ট প্রস্তুতি",
    description: "আপনার প্রদানকৃত তথ্যের ভিত্তিতে GTE স্টেটমেন্ট প্রস্তুত করা"
  }, {
    icon: <Shield className="text-red-600" size={32} />,
    title: "OSHC স্বাস্থ্য বীমার ব্যবস্থা",
    description: "ওভারসিজ স্টুডেন্ট হেলথ কভার বীমার ব্যবস্থা"
  }, {
    icon: <Target className="text-orange-600" size={32} />,
    title: "CoE সংগ্রহ",
    description: "বিশ্ববিদ্যালয় থেকে কনফার্মেশন অফ এনরোলমেন্ট সংগ্রহ"
  }, {
    icon: <CheckCircle className="text-teal-600" size={32} />,
    title: "ডকুমেন্ট চেকলিস্ট ও প্রস্তুতির গাইডলাইন",
    description: "প্রয়োজনীয় কাগজপত্রের তালিকা ও প্রস্তুতির নির্দেশনা"
  }, {
    icon: <Users className="text-pink-600" size={32} />,
    title: "মেডিকেল ও PCC নির্দেশনা",
    description: "স্বাস্থ্য পরীক্ষা ও পুলিশ ক্লিয়ারেন্সের নির্দেশনা"
  }, {
    icon: <Globe className="text-violet-600" size={32} />,
    title: "ভিসা ইন্টারভিউ প্রস্তুতিতে সহায়তা",
    description: "প্রয়োজনে ভিসা ইন্টারভিউয়ের জন্য প্রস্তুতি সহায়তা"
  }, {
    icon: <Plane className="text-emerald-600" size={32} />,
    title: "প্রাক-যাত্রা ব্রিফিং বা মূলিক প্রশিক্ষণ",
    description: "বিদেশ যাওয়ার আগে প্রয়োজনীয় তথ্য ও প্রশিক্ষণ প্রদান"
  }];

  const postArrivalServices = [{
    icon: <Plane className="text-blue-600" size={32} />,
    title: "বিমানবন্দর ও আগমন সহায়তা",
    description: "বিমানবন্দর থেকে থাকার জায়গায় পৌঁছানো, স্থানীয় সিম কার্ড, পরিবহন ও মুদ্রা বিনিময়ে সহায়তা"
  }, {
    icon: <Home className="text-green-600" size={32} />,
    title: "থাকার ব্যবস্থা সেটআপ",
    description: "থাকার জায়গায় পৌঁছানো, আসবাবপত্র সাজানো এবং মৌলিক সুবিধা প্রস্তুত করতে সহায়তা"
  }, {
    icon: <MapPin className="text-purple-600" size={32} />,
    title: "অভিমুখীকরণ ও স্থানীয় গাইডেন্স",
    description: "ক্যাম্পাস ও শহর পরিচিতি, লাইব্রেরি, ল্যাব, ক্লাসরুম, পরিবহন রুট এবং স্থানীয় আইন ও জরুরি সেবার তথ্য"
  }, {
    icon: <BookOpen className="text-indigo-600" size={32} />,
    title: "একাডেমিক সহায়তা",
    description: "কোর্স রেজিস্ট্রেশন, সময়সূচী তৈরি, লাইব্রেরি অ্যাক্সেস এবং অধ্যাপকদের সাথে পরিচয়"
  }, {
    icon: <Stethoscope className="text-red-600" size={32} />,
    title: "স্বাস্থ্যসেবা ও বীমা",
    description: "স্থানীয় ডাক্তার/ক্লিনিকে রেজিস্ট্রেশন, স্বাস্থ্য বীমার ক্লেইম এবং জরুরি চিকিৎসা সহায়তা"
  }, {
    icon: <CreditCard className="text-cyan-600" size={32} />,
    title: "ব্যাংকিং ও আর্থিক সহায়তা",
    description: "স্থানীয় ব্যাংক অ্যাকাউন্ট খোলা, ডেবিট/ক্রেডিট কার্ড সেটআপ এবং অর্থ স্থানান্তরে সহায়তা"
  }, {
    icon: <Heart className="text-pink-600" size={32} />,
    title: "সামাজিক ও সাংস্কৃতিক অভিযোজন",
    description: "স্থানীয় সংস্কৃতি ও ভাষা বুঝতে সহায়তা এবং কমিউনিটি গ্রুপ, স্টুডেন্ট ক্লাবের সাথে যোগাযোগ"
  }, {
    icon: <Users className="text-orange-600" size={32} />,
    title: "নিয়মিত পর্যবেক্ষণ ও পরামর্শ",
    description: "একাডেমিক অগ্রগতি পর্যবেক্ষণ, মানসিক সহায়তা, দেশের জন্য মন কেমন সামলানো এবং পার্ট-টাইম চাকরিতে গাইডেন্স"
  }];

  const studentSteps = [{
    icon: <FileText className="text-gray-700" size={28} />,
    title: "পাসপোর্টের জন্য আবেদন করুন",
    description: "সবার আগে একটি বৈধ পাসপোর্ট তৈরি করুন"
  }, {
    icon: <Globe className="text-gray-700" size={28} />,
    title: "IELTS/TOEFL পরীক্ষা দিন",
    description: "ইংরেজি ভাষার দক্ষতা প্রমাণের জন্য পরীক্ষায় অংশগ্রহণ করুন"
  }, {
    icon: <GraduationCap className="text-gray-700" size={28} />,
    title: "একাডেমিক ডকুমেন্ট প্রস্তুত করুন",
    description: "সার্টিফিকেট ও ট্রান্সক্রিপ্টের স্ক্যান/ফটোকপি তৈরি করুন"
  }, {
    icon: <Shield className="text-gray-700" size={28} />,
    title: "ব্যাংক স্টেটমেন্ট সংগ্রহ করুন",
    description: "আর্থিক সক্ষমতার প্রমাণ হিসেবে ব্যাংক স্টেটমেন্ট প্রস্তুত করুন"
  }, {
    icon: <Users className="text-gray-700" size={28} />,
    title: "মেডিকেল টেস্ট করান",
    description: "স্বাস্থ্য পরীক্ষা সম্পন্ন করুন"
  }, {
    icon: <FileText className="text-gray-700" size={28} />,
    title: "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC) সংগ্রহ করুন",
    description: "চরিত্র সনদপত্র সংগ্রহ করুন"
  }, {
    icon: <Clock className="text-gray-700" size={28} />,
    title: "টিউশন ফি পরিশোধ করুন",
    description: "এজেন্সির নির্দেশিত সময়সীমার মধ্যে ফি পরিশোধ করুন"
  }, {
    icon: <Globe className="text-gray-700" size={28} />,
    title: "প্রয়োজনীয় তথ্য প্রদান করুন (GTE এর জন্য)",
    description: "জেনুইন টেম্পোরারি এন্ট্রান্টের জন্য তথ্য প্রদান করুন"
  }, {
    icon: <FileText className="text-gray-700" size={28} />,
    title: "মূল ব্যক্তিগত ডকুমেন্ট জমা দিন",
    description: "প্রয়োজন অনুযায়ী মূল কাগজপত্র জমা দিন"
  }];

  return <div className="min-h-screen font-bangla bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent mb-6 leading-relaxed px-0 py-[15px] lg:text-6xl">
              বিদেশে পড়াশোনার প্রক্রিয়া
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ধাপে ধাপে জেনে নিন কীভাবে বিদেশে পড়াশোনার স্বপ্ন বাস্তবায়ন করবেন
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Two Boxes */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">আমাদের সেবাসমূহ</h2>
            <p className="text-xl opacity-90">বাংলাদেশে থাকাকালীন এবং বিদেশে পৌঁছানোর পর আমাদের সম্পূর্ণ সহায়তা</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pre-Departure Services */}
            <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">প্রাক-যাত্রা সেবা</h3>
                <p className="text-white/90">বাংলাদেশে থাকাকালীন আমাদের সহায়তা</p>
              </div>
              <div className="grid gap-4 max-h-96 overflow-y-auto">
                {preDepartureServices.map((service, index) => 
                  <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 text-sm leading-relaxed">{service.title}</h4>
                        <p className="text-white/80 text-xs leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Post-Arrival Services */}
            <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">সফলভাবে পৌঁছানোর পর</h3>
                <p className="text-white/90">বিদেশে পৌঁছানোর পর আমাদের সেবা</p>
              </div>
              <div className="grid gap-4 max-h-96 overflow-y-auto">
                {postArrivalServices.map((service, index) => 
                  <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 text-sm leading-relaxed">{service.title}</h4>
                        <p className="text-white/80 text-xs leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Steps Section - Simple Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">আপনার করণীয়</h2>
            <p className="text-xl text-gray-600">এজেন্সির নির্দেশনা অনুযায়ী আপনাকে যা করতে হবে</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {studentSteps.map((step, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400 hover:border-gray-600 hover:bg-gray-100 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-relaxed">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6 leading-relaxed">আজই শুরু করুন আপনার যাত্রা</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            বিদেশে পড়াশোনার স্বপ্ন বাস্তবায়নে আমরা আপনার পাশে আছি
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                ফ্রি কনসাল্টেশন নিন
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-white hover:bg-white text-lg px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-purple-600">
                আরও জানুন
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default StudyAbroadProcess;
