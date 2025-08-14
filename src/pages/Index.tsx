import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Globe, Users, Award, CheckCircle, ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  console.log('Index component is rendering...');
  
  React.useEffect(() => {
    console.log('Index component mounted successfully');
  }, []);

  console.log('About to render Index JSX...');

  return (
    <div className="min-h-screen font-bangla">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent mb-6 leading-relaxed lg:text-5xl">
                আপনার উচ্চশিক্ষা, আমাদের পথনির্দেশনা
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                সেরা বিশ্ববিদ্যালয়ে ভর্তি হতে এবং আপনার ভবিষ্যৎ ক্যারিয়ার গড়তে আজই আমাদের সাথে যোগাযোগ করুন।
              </p>
              <div className="space-x-4">
                <Link to="/contact">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">ফ্রি কনসাল্টেশন</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline">আমাদের সম্পর্কে</Button>
                </Link>
              </div>
            </div>
            <div className="order-first md:order-last">
              <img
                src="/hero-image.svg"
                alt="Study Abroad"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">আমাদের সেবাসমূহ</h2>
            <p className="text-lg text-gray-600">আমরা আপনাকে বিদেশে পড়াশোনার জন্য প্রয়োজনীয় সকল প্রকার সহায়তা প্রদান করি।</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <GraduationCap className="mr-2 inline-block h-5 w-5 text-purple-600" />
                  বিশ্ববিদ্যালয় নির্বাচন
                </CardTitle>
              </CardHeader>
              <CardContent>
                আমরা আপনার আগ্রহ এবং যোগ্যতার সাথে সঙ্গতি রেখে সঠিক বিশ্ববিদ্যালয় খুঁজে পেতে সহায়তা করি।
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <Globe className="mr-2 inline-block h-5 w-5 text-blue-600" />
                  ভিসা প্রসেসিং
                </CardTitle>
              </CardHeader>
              <CardContent>
                আমাদের অভিজ্ঞ ভিসা বিশেষজ্ঞরা আপনার ভিসার আবেদন প্রক্রিয়া সহজ করে দিবেন।
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <Users className="mr-2 inline-block h-5 w-5 text-green-600" />
                  বৃত্তি এবং আর্থিক সহায়তা
                </CardTitle>
              </CardHeader>
              <CardContent>
                আমরা আপনাকে বৃত্তি এবং আর্থিক সহায়তার জন্য আবেদন করতে সহায়তা করি।
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <Award className="mr-2 inline-block h-5 w-5 text-yellow-600" />
                  কোর্স নির্বাচন
                </CardTitle>
              </CardHeader>
              <CardContent>
                আমরা আপনার ভবিষ্যৎ লক্ষ্যের সাথে সংগতি রেখে সঠিক কোর্স নির্বাচন করতে সহায়তা করি।
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <CheckCircle className="mr-2 inline-block h-5 w-5 text-red-600" />
                  আবেদনপত্র তৈরি
                </CardTitle>
              </CardHeader>
              <CardContent>
                আমরা আপনার আবেদনপত্র নির্ভুলভাবে তৈরি করতে সহায়তা করি।
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <ArrowRight className="mr-2 inline-block h-5 w-5 text-indigo-600" />
                  অন্যান্য সহায়তা
                </CardTitle>
              </CardHeader>
              <CardContent>
                এছাড়াও আমরা আপনার জন্য আবাসন, বীমা এবং অন্যান্য প্রয়োজনীয় সহায়তা প্রদান করি।
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">কেন আমাদের নির্বাচন করবেন?</h2>
            <p className="text-lg text-gray-600">
              আমরা আপনার সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ এবং আপনার পাশে সবসময় আছি।
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Star className="text-yellow-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">অভিজ্ঞ পরামর্শক</h3>
                <p className="text-gray-600">আমাদের পরামর্শকেরা অভিজ্ঞ এবং আপনার প্রয়োজন অনুযায়ী সঠিক পরামর্শ দিতে প্রস্তুত।</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-red-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">সঠিক গন্তব্য</h3>
                <p className="text-gray-600">আমরা আপনাকে আপনার স্বপ্নের গন্তব্যে পৌঁছাতে সহায়তা করি।</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">যোগাযোগ</h3>
                <p className="text-gray-600">আমরা আপনার জন্য সবসময় উপলব্ধ এবং আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত।</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">সাপোর্ট</h3>
                <p className="text-gray-600">আমরা আপনাকে বিদেশে থাকাকালীনও সহায়তা প্রদান করি।</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="text-purple-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">সাফল্যের হার</h3>
                <p className="text-gray-600">আমাদের সাফল্যের হার খুব বেশি, যা আমাদের কাজের প্রমাণ।</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <GraduationCap className="text-indigo-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">বিশেষজ্ঞ</h3>
                <p className="text-gray-600">আমরা বিদেশে শিক্ষা এবং ভিসা প্রক্রিয়াকরণে বিশেষজ্ঞ।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">সাফল্যের গল্প</h2>
            <p className="text-lg text-gray-600">আমাদের শিক্ষার্থীরা তাদের স্বপ্ন পূরণ করেছে এবং আপনিও করতে পারেন!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">আরিফ হোসেন</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  আমি BEGL BD-এর মাধ্যমে কানাডার একটি সেরা বিশ্ববিদ্যালয়ে ভর্তি হয়েছি। তাদের সঠিক পরামর্শ এবং সহায়তার জন্য আমি কৃতজ্ঞ।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">সুমাইয়া আক্তার</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  BEGL BD আমাকে ভিসা প্রসেসিং এবং অন্যান্য প্রয়োজনীয় সহায়তা প্রদানের মাধ্যমে আমার স্বপ্ন পূরণ করতে সাহায্য করেছে।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">রাকিবুল ইসলাম</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  আমি BEGL BD-এর মাধ্যমে অস্ট্রেলিয়ার একটি বিশ্ববিদ্যালয়ে বৃত্তি পেয়েছি। তাদের সহায়তার জন্য আমি আন্তরিকভাবে ধন্যবাদ জানাই।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">জনপ্রিয় গন্তব্য</h2>
            <p className="text-lg opacity-90">
              বিদেশে পড়াশোনার জন্য কিছু জনপ্রিয় গন্তব্য।
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold leading-relaxed">কানাডা</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-white/90 text-center leading-relaxed text-sm">
                  কানাডা তার শিক্ষার গুণগত মান এবং জীবনযাত্রার জন্য বিখ্যাত।
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold leading-relaxed">অস্ট্রেলিয়া</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-white/90 text-center leading-relaxed text-sm">
                  অস্ট্রেলিয়া তার সুন্দর পরিবেশ এবং উন্নত শিক্ষা ব্যবস্থার জন্য পরিচিত।
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold leading-relaxed">যুক্তরাজ্য</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-white/90 text-center leading-relaxed text-sm">
                  যুক্তরাজ্য তার ঐতিহ্যবাহী শিক্ষা এবং সংস্কৃতি জন্য বিখ্যাত।
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold leading-relaxed">মার্কিন যুক্তরাষ্ট্র</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-white/90 text-center leading-relaxed text-sm">
                  মার্কিন যুক্তরাষ্ট্র তার প্রযুক্তি এবং গবেষণার জন্য পরিচিত।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            আপনার ভবিষ্যৎ আজই শুরু করুন!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            আমাদের সাথে যোগাযোগ করুন এবং আপনার উচ্চশিক্ষার স্বপ্ন পূরণ করুন।
          </p>
          <Link to="/contact">
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              ফ্রি কনসাল্টেশন
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
