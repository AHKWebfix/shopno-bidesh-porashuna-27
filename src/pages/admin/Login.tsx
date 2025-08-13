
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo authentication
    if (formData.email === 'admin@mheducation.com' && formData.password === 'admin123') {
      toast({
        title: "লগইন সফল!",
        description: "ড্যাশবোর্ডে স্বাগতম।",
      });
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "ভুল তথ্য",
        description: "ইমেইল বা পাসওয়ার্ড ভুল।",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">অ্যাডমিন লগইন</h1>
            <p className="text-gray-600">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">ইমেইল</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@mheducation.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">পাসওয়ার্ড</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-brand-blue hover:bg-blue-600 text-lg py-3 rounded-full"
            >
              লগইন করুন
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              ডেমো লগইন: admin@mheducation.com / admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
