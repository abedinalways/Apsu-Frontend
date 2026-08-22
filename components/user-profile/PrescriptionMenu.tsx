'use client';

import { ClipboardList, Eye } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PrescriptionMenuProps {
  open: boolean;
  onClose: () => void;
  onViewDetails: () => void;
  onTrackOrder: () => void;
}

export default function PrescriptionMenu({
  open,
  onClose,
  onViewDetails,
  onTrackOrder,
}: PrescriptionMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-14 z-50 w-40 origin-top-right rounded-[12px] border border-[#D7E5DC] bg-white p-2 shadow-[0_20px_60px_rgba(20,44,30,0.12)]"
    >
      <button
        type="button"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onViewDetails();
          onClose();
        }}
        className="flex w-full items-center gap-3 rounded-[8px] bg-[#EEF8F2] px-3 py-2 text-left text-xs font-medium text-secondary-text transition-colors duration-200 hover:bg-[#E6F4EC]"
      >
        <Eye className="h-4 w-4 shrink-0" />
        <span>View Details</span>
      </button>

      <button
        type="button"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onTrackOrder();
          onClose();
        }}
        className="mt-1 flex w-full items-center gap-3 rounded-[8px] px-3 py-2 text-left text-xs font-medium text-secondary-text transition-colors duration-200 hover:bg-bg-surface"
      >
        <ClipboardList className="h-4 w-4 shrink-0" />
        <span>Track Order</span>
      </button>
    </div>
  );
}
