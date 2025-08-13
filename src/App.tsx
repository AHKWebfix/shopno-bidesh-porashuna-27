
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudyAbroadProcess from "./pages/StudyAbroadProcess";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/Login";
import LeadManagerDashboard from "./pages/counselor/Dashboard";
import LeadManagerLogin from "./pages/counselor/Login";
import LeadDetail from "./pages/admin/LeadDetail";
import LeadManager from "./pages/admin/LeadManager";
import WebsiteManagement from "./pages/admin/WebsiteManagement";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/study-abroad-process" element={<StudyAbroadProcess />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/lead/:id" element={<LeadDetail />} />
          <Route path="/admin/lead-manager" element={<LeadManager />} />
          <Route path="/admin/website-management" element={<WebsiteManagement />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/leadmanager/login" element={<LeadManagerLogin />} />
          <Route path="/leadmanager/dashboard" element={<LeadManagerDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
