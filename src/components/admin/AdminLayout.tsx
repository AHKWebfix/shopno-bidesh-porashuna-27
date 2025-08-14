
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { Menu, X } from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-bangla overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-56 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${ /* Reduced width from w-64 */
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-3 border-b"> {/* Reduced padding */}
          <h2 className="text-base font-semibold">BEGL BD Admin</h2> {/* Reduced font size */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-md hover:bg-gray-100" /* Reduced padding */
          >
            <X className="w-4 h-4" /> {/* Reduced size */}
          </button>
        </div>
        <AdminSidebar />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <AdminSidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Mobile header with hamburger */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between"> {/* Reduced padding */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-md hover:bg-gray-100" /* Reduced padding */
          >
            <Menu className="w-4 h-4" /> {/* Reduced size */}
          </button>
          <h1 className="text-base font-semibold text-gray-900">BEGL BD Admin</h1> {/* Reduced font size */}
          <div className="w-7" /> {/* Reduced spacer */}
        </div>

        {/* Desktop header */}
        <div className="hidden lg:block">
          <AdminHeader />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-3 lg:p-4"> {/* Reduced padding */}
          <div className="max-w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
