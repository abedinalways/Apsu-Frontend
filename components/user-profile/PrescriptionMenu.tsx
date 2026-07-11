'use client';

import { ClipboardList, Eye } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

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

  useLayoutEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.killTweensOf(menuRef.current);

      gsap.set(menuRef.current, {
        opacity: 0,
        y: -12,
        scale: 0.96,
        pointerEvents: 'auto',
      });

      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: 'power3.out',
      });
    } else {
      gsap.killTweensOf(menuRef.current);

      gsap.to(menuRef.current, {
        opacity: 0,
        y: -12,
        scale: 0.96,
        duration: 0.18,
        ease: 'power2.in',
        pointerEvents: 'none',
      });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  return (
    <div
      ref={menuRef}
      className={`absolute right-0 top-14 z-50 w-64 origin-top-right rounded-[28px] border border-[#D7E5DC] bg-white p-4 shadow-[0_20px_60px_rgba(20,44,30,0.12)] ${
        open ? 'block' : 'hidden'
      }`}
    >
      <button
        onClick={() => {
          onViewDetails();
          onClose();
        }}
        className="flex w-full items-center gap-4 rounded-2xl bg-[#EEF8F2] px-6 py-5 text-left text-lg font-medium text-[#142C1E] transition-colors duration-200 hover:bg-[#E6F4EC]"
      >
        <Eye className="h-5 w-5" />
        <span>View Details</span>
      </button>

      <button
        onClick={() => {
          onTrackOrder();
          onClose();
        }}
        className="mt-2 flex w-full items-center gap-4 rounded-2xl px-6 py-5 text-left text-lg font-medium text-[#142C1E] transition-colors duration-200 hover:bg-[#F4F7F5]"
      >
        <ClipboardList className="h-5 w-5" />
        <span>Track Order</span>
      </button>
    </div>
  );
}
