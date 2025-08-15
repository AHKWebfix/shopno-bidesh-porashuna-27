
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              যোগাযোগ করুন
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              আপনার যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় নিয়োজিত।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Phone className="text-brand-blue" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">ফোন নাম্বার</h3>
                      <p className="text-gray-600 text-lg">+৮৮০ ১৭xxxxxxxx</p>
                      <p className="text-gray-600 text-lg">+৮৮০ ১৮xxxxxxxx</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center">
                      <Mail className="text-brand-green" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">ইমেইল</h3>
                      <p className="text-gray-600 text-lg">info@mheducation.com</p>
                      <p className="text-gray-600 text-lg">support@mheducation.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-brand-orange" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">ঠিকানা</h3>
                      <p className="text-gray-600 text-lg">১২৩ গুলশান এভিনিউ</p>
                      <p className="text-gray-600 text-lg">ঢাকা - ১২১২, বাংলাদেশ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Clock className="text-brand-blue" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">অফিস টাইম</h3>
                      <p className="text-gray-600 text-lg">রবি - বৃহস্পতি: ৯:০০ - ৬:০০</p>
                      <p className="text-gray-600 text-lg">শুক্রবার: ৯:০০ - ৫:০০</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex justify-center">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-brand-green to-brand-blue text-white max-w-md w-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">হোয়াটসঅ্যাপে যোগাযোগ</h3>
                  <p className="opacity-90 mb-6 text-lg">তাৎক্ষণিক সাহায্যের জন্য আমাদের সাথে চ্যাট করুন</p>
                  <Button variant="outline" className="bg-white text-brand-blue border-white hover:bg-gray-100 text-lg px-8 py-3">
                    এখনই চ্যাট করুন
                  </Button>
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
            <p className="text-gray-600 text-lg">আমাদের অফিসে সরাসরি ভিজিট করতে পারেন</p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center shadow-lg">
            <div className="text-center">
              <MapPin className="text-gray-500 mx-auto mb-4" size={48} />
              <p className="text-gray-600 text-lg">গুগল ম্যাপ এখানে এমবেড করা হবে</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
