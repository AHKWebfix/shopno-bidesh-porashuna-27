
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
            <Route path="/counselor/dashboard" element={<CounselorDashboard />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
