
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface University {
  id?: number;
  name: string;
  country: string;
  countryCode: string;
  colorCode: string;
}

interface UniversityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (university: University) => void;
  university?: University | null;
  mode: 'add' | 'edit';
}

const UniversityModal: React.FC<UniversityModalProps> = ({
  isOpen,
  onClose,
  onSave,
  university,
  mode
}) => {
  const [formData, setFormData] = useState<University>({
    name: university?.name || '',
    country: university?.country || '',
    countryCode: university?.countryCode || '',
    colorCode: university?.colorCode || '#FF6B35'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: university?.id || Date.now()
    });
    onClose();
  };

  const handleInputChange = (field: keyof University, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const predefinedColors = [
    '#FF6B35', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#74B9FF', '#00B894'
  ];

  const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Singapore', code: 'SG' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'United States', code: 'US' },
    { name: 'Germany', code: 'DE' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{mode === 'add' ? 'Add New University' : 'Edit University'}</span>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-4 h-4" />
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              University Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g., University of Melbourne"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              value={formData.country}
              onChange={(e) => {
                const selectedCountry = countries.find(c => c.name === e.target.value);
                handleInputChange('country', e.target.value);
                if (selectedCountry) {
                  handleInputChange('countryCode', selectedCountry.code);
                }
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country Code
            </label>
            <input
              type="text"
              value={formData.countryCode}
              onChange={(e) => handleInputChange('countryCode', e.target.value.toUpperCase())}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g., AU"
              maxLength={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Code
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {predefinedColors.map(color => (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleInputChange('colorCode', color)}
                  className={`w-8 h-8 rounded border-2 ${
                    formData.colorCode === color ? 'border-gray-800' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <input
              type="text"
              value={formData.colorCode}
              onChange={(e) => handleInputChange('colorCode', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="#FF6B35"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
              {mode === 'add' ? 'Add University' : 'Update University'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UniversityModal;
