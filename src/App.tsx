
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import StudyAbroadProcess from "./pages/StudyAbroadProcess";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import LeadManagement from "./pages/admin/LeadManagement";
import CounselorManagement from "./pages/admin/CounselorManagement";
import DocumentManagement from "./pages/admin/DocumentManagement";
import WebsiteManagement from "./pages/admin/WebsiteManagement";
import Settings from "./pages/admin/Settings";
import DocumentUpload from "./pages/admin/DocumentUpload";
import CounselorLogin from "./pages/counselor/Login";
import CounselorLayout from "./components/counselor/CounselorLayout";
import CounselorDashboard from "./pages/counselor/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/study-abroad-process" element={<StudyAbroadProcess />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="leads" element={<LeadManagement />} />
              <Route path="counselors" element={<CounselorManagement />} />
              <Route path="documents" element={<DocumentManagement />} />
              <Route path="website" element={<WebsiteManagement />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/admin/document-upload" element={<DocumentUpload />} />

            {/* Counselor Routes */}
            <Route path="/counselor/login" element={<CounselorLogin />} />
            <Route path="/counselor" element={<CounselorLayout />}>
              <Route path="dashboard" element={<CounselorDashboard />} />
              <Route path="leads" element={<CounselorDashboard />} />
              <Route path="documents" element={<div className="p-6"><h1 className="text-2xl font-bold">Documents</h1><p>Documents management coming soon...</p></div>} />
              <Route path="account" element={<div className="p-6"><h1 className="text-2xl font-bold">Account Settings</h1><p>Account management coming soon...</p></div>} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
