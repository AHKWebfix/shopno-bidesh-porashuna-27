
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  country: string;
  status: string;
  dateSubmitted: string;
  counselor: string;
}

interface LeadEditModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (leadId: number, newStatus: string) => void;
}

const LeadEditModal: React.FC<LeadEditModalProps> = ({ lead, isOpen, onClose, onUpdate }) => {
  const [status, setStatus] = useState(lead?.status || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lead) {
      onUpdate(lead.id, status);
      onClose();
    }
  };

  if (!lead) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Edit className="w-5 h-5" />
            <span>Edit Lead Status</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">{lead.name}</h3>
            <p className="text-sm text-gray-500">ID: #{lead.id}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lead Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="Pending">Pending</option>
              <option value="Contacted">Contacted</option>
              <option value="File Open">File Open</option>
              <option value="Not Interested">Not Interested</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
              Update Status
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadEditModal;
