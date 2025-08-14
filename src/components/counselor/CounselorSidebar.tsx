
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Settings, LogOut, ChevronRight, Link, Menu, X } from 'lucide-react';

const CounselorSidebar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [{
    name: 'Dashboard',
    icon: LayoutDashboard,
    path: '/counselor/dashboard'
  }, {
    name: 'My Leads',
    icon: Users,
    path: '/counselor/leads'
  }, {
    name: 'Documents',
    icon: FileText,
    path: '/counselor/documents'
  }, {
    name: 'Upload Links',
    icon: Link,
    path: '/counselor/upload-links'
  }, {
    name: 'Account',
    icon: Settings,
    path: '/counselor/account'
  }];
  
  const handleLogout = () => {
    navigate('/counselor/login');
    setIsMobileMenuOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-3 right-3 z-50"> {/* Reduced positioning */}
        <button onClick={toggleMobileMenu} className="bg-white shadow-lg p-1.5 rounded-lg border border-gray-200"> {/* Reduced padding */}
          {isMobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />} {/* Reduced size */}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div className={`
        bg-white shadow-lg min-h-screen flex flex-col transition-transform duration-300 ease-in-out z-40
        lg:translate-x-0 lg:static lg:w-56
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed w-56 lg:relative
      `}> {/* Reduced width from w-64 to w-56 */}
        
        {/* Header Section with Close Button */}
        <div className="p-3 sm:p-4 border-b border-gray-200"> {/* Reduced padding */}
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2"> {/* Reduced space */}
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-lg flex items-center justify-center"> {/* Reduced size */}
                <span className="text-white font-bold text-base sm:text-lg">B</span> {/* Reduced font size */}
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-gray-900">BEGL BD</h1> {/* Reduced font size */}
                <p className="text-xs text-gray-500">Counselor Panel</p> {/* Reduced font size */}
              </div>
            </div>
            
            {/* Close Button - Only visible on mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-3 sm:py-4"> {/* Reduced padding */}
          <ul className="space-y-1 px-2 sm:px-3"> {/* Reduced spacing and padding */}
            {menuItems.map(item => (
              <li key={item.name}>
                <NavLink 
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={({ isActive }) => 
                    `flex items-center px-2 sm:px-3 py-2 text-gray-700 rounded-lg transition-colors duration-200 group text-sm ${
                      isActive 
                        ? 'bg-primary text-white shadow-md' 
                        : 'hover:bg-gray-100 hover:text-primary'
                    }`
                  } /* Reduced padding and font size */
                >
                  <item.icon className="w-4 h-4 mr-2" /> {/* Reduced size and margin */}
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" /> {/* Reduced size */}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-2 sm:p-3 border-t border-gray-200"> {/* Reduced padding */}
          <button 
            onClick={handleLogout} 
            className="flex items-center w-full px-2 sm:px-3 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm" /* Reduced padding and font size */
          >
            <LogOut className="w-4 h-4 mr-2" /> {/* Reduced size and margin */}
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CounselorSidebar;
