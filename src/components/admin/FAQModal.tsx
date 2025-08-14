
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FAQ {
  id?: number;
  question: string;
  answer: string;
}

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (faq: FAQ) => void;
  faq?: FAQ | null;
  mode: 'add' | 'edit';
}

const FAQModal: React.FC<FAQModalProps> = ({
  isOpen,
  onClose,
  onSave,
  faq,
  mode
}) => {
  const [formData, setFormData] = useState<FAQ>({
    question: faq?.question || '',
    answer: faq?.answer || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: faq?.id || Date.now()
    });
    onClose();
  };

  const handleInputChange = (field: keyof FAQ, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{mode === 'add' ? 'Add New FAQ' : 'Edit FAQ'}</span>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-4 h-4" />
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <textarea
              value={formData.question}
              onChange={(e) => handleInputChange('question', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={2}
              placeholder="What documents do I need to study abroad?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer
            </label>
            <textarea
              value={formData.answer}
              onChange={(e) => handleInputChange('answer', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={4}
              placeholder="Provide a detailed answer to the question..."
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
              {mode === 'add' ? 'Add FAQ' : 'Update FAQ'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FAQModal;
