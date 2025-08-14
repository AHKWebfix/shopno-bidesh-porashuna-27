
import React from 'react';
import { GraduationCap, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Reduced padding from py-12 */}
      <div className="container mx-auto px-3"> {/* Reduced padding from px-4 */}
        <div className="grid md:grid-cols-4 gap-6 mb-6"> {/* Reduced gap and margin */}
          <div>
            <div className="flex items-center space-x-2 mb-3"> {/* Reduced spacing */}
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 rounded-full flex items-center justify-center shadow-lg"> {/* Reduced from w-10 h-10 */}
                <GraduationCap className="text-white" size={20} /> {/* Reduced from size={24} */}
              </div>
              <h3 className="text-lg font-bold">BEGL BD</h3> {/* Reduced from text-xl */}
            </div>
            <p className="text-gray-300 leading-relaxed mb-3 text-sm"> {/* Reduced margin and font size */}
              আপনার স্বপ্ন পূরণে আমরা আছি পাশে। বিদেশে উচ্চশিক্ষার জন্য পান সম্পূর্ণ ফ্রি পরামর্শ ও গাইডেন্স।
            </p>
            <div className="flex space-x-3"> {/* Reduced space from space-x-4 */}
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"> {/* Reduced from w-8 h-8 */}
                <Facebook size={14} /> {/* Reduced from size={16} */}
              </div>
              <div className="w-7 h-7 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <Instagram size={14} />
              </div>
              <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <Youtube size={14} />
              </div>
              <div className="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <Linkedin size={14} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-3">দ্রুত লিংক</h4> {/* Reduced font size and margin */}
            <ul className="space-y-1.5 text-gray-300 text-sm"> {/* Reduced spacing and font size */}
              <li><Link to="/" className="hover:text-white transition-colors">হোম</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/study-abroad-process" className="hover:text-white transition-colors">বিদেশে পড়াশোনার প্রক্রিয়া</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-3">সেবাসমূহ</h4> {/* Reduced font size and margin */}
            <ul className="space-y-1.5 text-gray-300 text-sm"> {/* Reduced spacing and font size */}
              <li>• ফ্রি কনসাল্টেশন</li>
              <li>• ভিসা প্রসেসিং</li>
              <li>• ইউনিভার্সিটি অ্যাপ্লিকেশন</li>
              <li>• স্কলারশিপ গাইডেন্স</li>
              <li>• অ্যাকমোডেশন সাপোর্ট</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-3">যোগাযোগ</h4> {/* Reduced font size and margin */}
            <div className="space-y-1.5 text-gray-300 text-sm"> {/* Reduced spacing and font size */}
              <p>📞 +৮৮০ ১৭xxxxxxxx</p>
              <p>✉️ info@begleducation.com</p>
              <p>📍 গুলশান, ঢাকা, বাংলাদেশ</p>
              <p>🕒 রবি - বৃহস্পতি: ৯:০০ - ৬:০০</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center"> {/* Reduced padding */}
          <p className="text-gray-300 text-base font-medium">আপনার স্বপ্ন পূরণে আমরা আছি পাশে</p> {/* Reduced font size */}
          <p className="text-gray-400 text-xs mt-1"> {/* Reduced margin */}
            © ২০২৪ BEGL BD। সর্বস্বত্ব সংরক্ষিত। | Design & Developed by Ahasanul Haque Khairul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
