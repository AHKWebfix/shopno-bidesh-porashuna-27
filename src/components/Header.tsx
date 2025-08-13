
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'হোম', path: '/' },
    { label: 'আমাদের সম্পর্কে', path: '/about' },
    { label: 'বিদেশে পড়াশোনার প্রক্রিয়া', path: '/study-abroad-process' },
    { label: 'যোগাযোগ', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent">BEGL Education</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" className="hidden md:flex border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                ফ্রি কনসাল্টেশন
              </Button>
            </Link>
            <Button variant="ghost" className="md:hidden">
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
