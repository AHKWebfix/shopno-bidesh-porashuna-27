
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Save, Eye, RotateCcw } from 'lucide-react';

const HeroSectionManagement = () => {
  const [heroData, setHeroData] = useState({
    title: 'Your Dream Education Abroad Awaits',
    subtitle: 'Expert guidance for studying in top universities worldwide. Get personalized counseling and visa assistance.',
    buttonText: 'Start Your Journey',
    backgroundImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3'
  });

  const [originalData] = useState(heroData);

  const handleInputChange = (field: string, value: string) => {
    setHeroData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving hero section data:', heroData);
    // Here you would typically send the data to your backend
  };

  const handleReset = () => {
    setHeroData(originalData);
  };

  const handlePreview = () => {
    console.log('Opening preview with data:', heroData);
    // Here you would open a preview modal or navigate to preview page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hero Section Management</h1>
          <p className="text-gray-600 mt-2">Customize the main hero section of your website</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Edit Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Edit Hero Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Main Title</Label>
                  <Input
                    id="title"
                    value={heroData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter main title"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Textarea
                    id="subtitle"
                    value={heroData.subtitle}
                    onChange={(e) => handleInputChange('subtitle', e.target.value)}
                    placeholder="Enter subtitle description"
                    rows={3}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="buttonText">Button Text</Label>
                  <Input
                    id="buttonText"
                    value={heroData.buttonText}
                    onChange={(e) => handleInputChange('buttonText', e.target.value)}
                    placeholder="Enter button text"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="backgroundImage">Background Image URL</Label>
                  <Input
                    id="backgroundImage"
                    value={heroData.backgroundImage}
                    onChange={(e) => handleInputChange('backgroundImage', e.target.value)}
                    placeholder="Enter image URL"
                    className="mt-2"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleSave} className="flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={handlePreview}>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Preview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="relative rounded-lg overflow-hidden bg-cover bg-center min-h-[400px] flex items-center justify-center"
                  style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative text-center text-white p-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                      {heroData.title || 'Your Title Here'}
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl">
                      {heroData.subtitle || 'Your subtitle description here'}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                      {heroData.buttonText || 'Button Text'}
                    </button>
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

export default HeroSectionManagement;
