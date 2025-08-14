
import React from 'react';
import { Outlet } from 'react-router-dom';
import CounselorSidebar from './CounselorSidebar';

const CounselorLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <CounselorSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default CounselorLayout;
