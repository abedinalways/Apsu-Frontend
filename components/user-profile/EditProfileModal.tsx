'use client';

import { X } from 'lucide-react';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
}: EditProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-[24px] overflow-hidden shadow-xl border border-[#EBEAE4] p-6 space-y-6 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-4"
        >
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Maria Olives"
              className="w-full h-11 px-3.5 border border-[#b8d9c6] bg-[#faf9f4] rounded-xl text-sm focus:outline-none focus:border-[#142C1E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue="(555)-XXX-XXXX"
              className="w-full h-11 px-3.5 border border-[#b8d9c6] bg-[#faf9f4] rounded-xl text-sm focus:outline-none focus:border-[#142C1E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              defaultValue="Jakarta, Indonesia"
              className="w-full h-11 px-3.5 border border-[#b8d9c6] bg-[#faf9f4] rounded-xl text-sm focus:outline-none focus:border-[#142C1E]"
            />
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-11 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-11 bg-[#142C1E] hover:bg-[#1c3d2a] text-white rounded-full text-sm font-medium transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
