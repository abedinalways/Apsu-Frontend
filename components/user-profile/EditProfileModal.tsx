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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-all animate-fade-in font-[Work_Sans]">
      <div className="bg-[#faf9f6] w-full max-w-2xl rounded-[24px] overflow-hidden shadow-2xl border border-[#EBEAE4] max-h-[90vh] flex flex-col relative">
        {/* Header Section */}
        <div className="p-6 bg-white border-b border-gray-100 flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Profile Settings
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light mt-0.5">
              Manage your profile and preferences.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <form
          onSubmit={e => {
            e.preventDefault();
            onClose();
          }}
          className="flex-1 overflow-y-auto p-6 space-y-6"
        >
          {/* Section 1: Personal Information */}
          <div className="bg-white p-5 rounded-[16px] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#142C1E] font-medium text-sm border-b border-gray-50 pb-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>Personal Information</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Maria"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Olives"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="27/06/2000"
                    className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                  />
                  <svg
                    className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  Phone
                </label>
                <input
                  type="text"
                  defaultValue="(555)-123 1234"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                defaultValue="maira@gmail.com"
                className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
              />
            </div>
          </div>

          {/* Section 2: Shipping Address */}
          <div className="bg-white p-5 rounded-[16px] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#142C1E] font-medium text-sm border-b border-gray-50 pb-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Shipping Address</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  State
                </label>
                <input
                  type="text"
                  defaultValue="Jakarta"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="Jakarta"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  Country
                </label>
                <input
                  type="text"
                  defaultValue="Indonesia"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-800">
                  Postal Code
                </label>
                <input
                  type="text"
                  defaultValue="100511"
                  className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] font-normal"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Healthcare Preferences */}
          <div className="bg-white p-5 rounded-[16px] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#142C1E] font-medium text-sm border-b border-gray-50 pb-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 20.935V19a2 2 0 012-2h3.08a2 2 0 001.513-.692l1.17-1.4a2 2 0 013.07 0l2.284 2.284A9 9 0 113.055 11z"
                ></path>
              </svg>
              <span>Healthcare Preferences</span>
            </div>
            <div className="space-y-1.5 text-left w-full sm:w-1/2">
              <label className="text-xs font-semibold text-gray-800">
                Country
              </label>
              <div className="relative">
                <select className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] appearance-none font-normal text-gray-700 cursor-pointer">
                  <option>Select Language</option>
                  <option value="en">English</option>
                  <option value="id">Indonesia</option>
                </select>
                <svg
                  className="w-4 h-4 text-gray-500 absolute right-3.5 top-3.5 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Section 4: Account Security */}
          <div className="bg-white p-5 rounded-[16px] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#142C1E] font-medium text-sm border-b border-gray-50 pb-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              <span>Account Security</span>
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-800">
                Current Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] placeholder-gray-400 font-normal"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-800">
                New Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] placeholder-gray-400 font-normal"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-800">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-11 px-3.5 border border-gray-200 bg-[#faf9f5] rounded-xl text-sm focus:outline-none focus:border-[#142C1E] placeholder-gray-400 font-normal"
              />
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-gray-100 flex justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="h-11 px-6 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            type="submit"
            className="h-11 px-6 bg-[#142C1E] hover:bg-[#1c3d2a] text-white rounded-full text-sm font-medium transition-colors cursor-pointer"
          >
            Update & Save
          </button>
        </div>
      </div>
    </div>
  );
}
