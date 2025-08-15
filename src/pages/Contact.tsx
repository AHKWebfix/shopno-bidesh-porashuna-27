
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Hero Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              যোগাযোগ করুন
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
              আপনার যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় নিয়োজিত।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-brand-blue" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">ফোন নাম্বার</h3>
                      <p className="text-gray-600 text-base lg:text-lg break-all">+৮৮০ ১৭xxxxxxxx</p>
                      <p className="text-gray-600 text-base lg:text-lg break-all">+৮৮০ ১৮xxxxxxxx</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-brand-green" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">ইমেইল</h3>
                      <p className="text-gray-600 text-base lg:text-lg break-all">info@mheducation.com</p>
                      <p className="text-gray-600 text-base lg:text-lg break-all">support@mheducation.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-brand-orange" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">ঠিকানা</h3>
                      <p className="text-gray-600 text-base lg:text-lg">১২৩ গুলশান এভিনিউ</p>
                      <p className="text-gray-600 text-base lg:text-lg">ঢাকা - ১২১২, বাংলাদেশ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-brand-blue" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">অফিস টাইম</h3>
                      <p className="text-gray-600 text-base lg:text-lg">রবি - বৃহস্পতি: ৯:০০ - ৬:০০</p>
                      <p className="text-gray-600 text-base lg:text-lg">শুক্রবার: ৯:০০ - ৫:০০</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex justify-center px-4">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-brand-green to-brand-blue text-white max-w-md w-full">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">হোয়াটসঅ্যাপে যোগাযোগ</h3>
                  <p className="opacity-90 mb-6 text-base lg:text-lg leading-relaxed">তাৎক্ষণিক সাহায্যের জন্য আমাদের সাথে চ্যাট করুন</p>
                  <Button variant="outline" className="bg-white text-brand-blue border-white hover:bg-gray-100 text-base lg:text-lg px-6 py-2 lg:px-8 lg:py-3">
                    এখনই চ্যাট করুন
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">আমাদের অবস্থান</h2>
            <p className="text-gray-600 text-base lg:text-lg">আমাদের অফিসে সরাসরি ভিজিট করতে পারেন</p>
          </div>
          <div className="bg-gray-200 h-64 lg:h-96 rounded-lg flex items-center justify-center shadow-lg mx-auto max-w-4xl">
            <div className="text-center">
              <MapPin className="text-gray-500 mx-auto mb-4" size={40} />
              <p className="text-gray-600 text-base lg:text-lg px-4">গুগল ম্যাপ এখানে এমবেড করা হবে</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
