import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StudyAbroadProcess from './pages/StudyAbroadProcess';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import CounselorLogin from './pages/counselor/CounselorLogin';
import CounselorDashboard from './pages/counselor/Dashboard';
import CounselorLayout from './components/counselor/CounselorLayout';
import AdminLayout from './components/admin/AdminLayout';
import Leads from './pages/admin/Leads';
import Counselors from './pages/admin/Counselors';
import Documents from './pages/admin/Documents';
import CounselorLeads from './pages/counselor/Leads';
import CounselorDocuments from './pages/counselor/Documents';
import CounselorAccount from './pages/counselor/Account';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/study-abroad-process" element={<StudyAbroadProcess />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="counselors" element={<Counselors />} />
          <Route path="documents" element={<Documents />} />
        </Route>
        
        {/* Counselor Routes */}
        <Route path="/counselor/login" element={<CounselorLogin />} />
        <Route path="/counselor" element={<CounselorLayout />}>
          <Route path="dashboard" element={<CounselorDashboard />} />
          <Route path="leads" element={<CounselorLeads />} />
          <Route path="documents" element={<CounselorDocuments />} />
          <Route path="account" element={<CounselorAccount />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
