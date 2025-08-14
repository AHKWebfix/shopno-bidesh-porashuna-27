
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'হোম', path: '/' },
    { label: 'আমাদের সম্পর্কে', path: '/about' },
    { label: 'বিদেশে পড়াশোনার প্রক্রিয়া', path: '/study-abroad-process' },
    { label: 'যোগাযোগ', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-3 py-3"> {/* Reduced padding from px-4 py-4 */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2"> {/* Reduced space from space-x-3 */}
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 rounded-full flex items-center justify-center shadow-lg"> {/* Reduced from w-10 h-10 */}
              <GraduationCap className="text-white" size={20} /> {/* Reduced from size={24} */}
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent"> {/* Reduced from text-2xl */}
              BEGL BD
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-5"> {/* Reduced space from space-x-6 */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors text-sm ${  /* Reduced font size */
                  location.pathname === item.path
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3"> {/* Reduced space from space-x-4 */}
            <Link to="/">
              <Button variant="outline" className="hidden md:flex border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-sm px-3 py-2"> {/* Added compact sizing */}
                ফ্রি কনসাল্টেশন
              </Button>
            </Link>
            <Button variant="ghost" className="md:hidden p-2" onClick={toggleMobileMenu}> {/* Reduced padding */}
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />} {/* Reduced from size={24} */}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-200"> {/* Reduced spacing */}
            <nav className="flex flex-col space-y-2 pt-3"> {/* Reduced spacing */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors py-1.5 text-sm ${ /* Reduced padding and font size */
                    location.pathname === item.path
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-sm py-2"> {/* Reduced margin and added compact sizing */}
                  ফ্রি কনসাল্টেশন
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
