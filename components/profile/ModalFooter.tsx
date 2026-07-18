'use client';

interface ModalFooterProps {
  onClose: () => void;
  isLoading?: boolean;
}

export default function ModalFooter({
  onClose,
  isLoading = false,
}: ModalFooterProps) {
  return (
    <div className="flex shrink-0 justify-end gap-3 border-t border-gray-100 bg-white p-4">
      <button
        type="button"
        onClick={onClose}
        disabled={isLoading}
        className="h-11 cursor-pointer rounded-full border border-gray-200 px-6 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Cancel
      </button>

      <button
        type="submit"
        form="edit-profile-form"
        disabled={isLoading}
        className="flex h-11 min-w-[140px] cursor-pointer items-center justify-center rounded-full bg-[#142C1E] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1c3d2a] disabled:cursor-not-allowed disabled:bg-[#142C1E]/70"
      >
        {isLoading ? 'Updating...' : 'Update & Save'}
      </button>
    </div>
  );
}
