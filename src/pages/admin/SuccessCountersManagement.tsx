
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Save, TrendingUp, Users, FileText, Award } from 'lucide-react';

const SuccessCountersManagement = () => {
  const [counters, setCounters] = useState({
    totalLeadsSubmitted: 1250,
    studentsWithFileOpen: 380,
    studentsWentAbroad: 156,
    successRate: 85
  });

  const handleInputChange = (field: string, value: string) => {
    setCounters(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  const handleSave = () => {
    console.log('Saving success counters:', counters);
    // Here you would typically send the data to your backend
  };

  const counterItems = [
    {
      key: 'totalLeadsSubmitted',
      label: 'Total Leads Submitted',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      key: 'studentsWithFileOpen',
      label: 'Students with File Open',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      key: 'studentsWentAbroad',
      label: 'Students Who Went Abroad',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      key: 'successRate',
      label: 'Success Rate (%)',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Success Counters Management</h1>
          <p className="text-gray-600 mt-2">Update your success statistics displayed on the website</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Edit Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Update Counters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {counterItems.map((item) => (
                  <div key={item.key}>
                    <Label htmlFor={item.key}>{item.label}</Label>
                    <Input
                      id={item.key}
                      type="number"
                      value={counters[item.key as keyof typeof counters]}
                      onChange={(e) => handleInputChange(item.key, e.target.value)}
                      placeholder={`Enter ${item.label.toLowerCase()}`}
                      className="mt-2"
                      min="0"
                    />
                  </div>
                ))}

                <Button onClick={handleSave} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {counterItems.map((item) => {
                    const Icon = item.icon;
                    const value = counters[item.key as keyof typeof counters];
                    
                    return (
                      <div key={item.key} className="bg-white p-6 rounded-lg border text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.bgColor} mb-4`}>
                          <Icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          {item.key === 'successRate' ? `${value}%` : value.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Additional preview as a banner style */}
                <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold text-center mb-6">Our Success Story</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {counterItems.map((item, index) => {
                      const value = counters[item.key as keyof typeof counters];
                      return (
                        <div key={index} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold mb-1">
                            {item.key === 'successRate' ? `${value}%` : value.toLocaleString()}
                          </div>
                          <div className="text-sm opacity-90">{item.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCountersManagement;
