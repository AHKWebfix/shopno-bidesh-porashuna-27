
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudyAbroadProcess from "./pages/StudyAbroadProcess";
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import LeadManagement from "./pages/admin/LeadManagement";
import CounselorManagement from "./pages/admin/CounselorManagement";
import WebsiteManagement from "./pages/admin/WebsiteManagement";
import Settings from "./pages/admin/Settings";
import DocumentUpload from "./pages/admin/DocumentUpload";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/study-abroad-process" element={<StudyAbroadProcess />} />
          
          {/* Admin Login (outside of admin layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* Document Upload Portal (standalone) */}
          <Route path="/upload" element={<DocumentUpload />} />
          
          {/* Admin Routes with Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<LeadManagement />} />
            <Route path="counselors" element={<CounselorManagement />} />
            <Route path="website" element={<WebsiteManagement />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
