'use client';

import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Upload, Trash2, FileText } from 'lucide-react';
import { FormData } from '@/zod/AssessmentSchema';

export default function EligibilityStepFour() {
  const { control, setValue, watch } = useFormContext<FormData>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Watch attachments array (assumes Array<{ id?: string; name: string; size: string; type: string }>)
  const attachments = watch('attachments') || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2).replace('.', ',')} MB`,
        type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
      }));

      setValue('attachments', [...attachments, ...newFiles], {
        shouldValidate: true,
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updated = attachments.filter((_: any, i: number) => i !== index);
    setValue('attachments', updated, { shouldValidate: true });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2).replace('.', ',')} MB`,
        type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
      }));

      setValue('attachments', [...attachments, ...newFiles], {
        shouldValidate: true,
      });
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
      case 'pdf':
      case 'png':
        return 'bg-[#e5252a] text-white';
      case 'doc':
      case 'docx':
        return 'bg-[#1868db] text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c] tracking-tight">
          Identity Verification
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5 leading-relaxed">
          To verify your identity, please upload a valid Driver's License or
          government-issued photo ID.
        </p>
      </div>

      {/* File Dropzone */}
      <FormField
        control={control}
        name="attachments"
        render={() => (
          <FormItem>
            <FormControl>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="bg-[background] border border-[#dce3de] rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center transition-colors"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  className="hidden"
                  aria-label="Upload attachments"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="h-12 w-12 rounded-full bg-[#dbe5de] flex items-center justify-center cursor-pointer hover:bg-[#cfded3] transition-colors"
                >
                  <Upload className="h-5 w-5 text-[#102b1c]" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-[#102b1c]">
                    Drag & Drop or{' '}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[#102b1c] underline font-semibold cursor-pointer"
                    >
                      Browse
                    </button>
                  </p>
                  <p className="text-[12px] text-gray-500 mt-1">
                    JPG, PNG or PDF (Max 5MB)
                  </p>
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Attachments List */}
      {attachments.length > 0 && (
        <div className="border border-gray-200/80 rounded-2xl p-5 space-y-3">
          <h3 className="text-[16px] font-medium text-[#102b1c]">
            Attachments
          </h3>
          <div className="space-y-2.5">
            {attachments.map((file: any, index: number) => (
              <div
                key={file.id || index}
                className="bg-[background] border border-[#dce3de] rounded-xl p-3.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {/* File Type Icon Badge */}
                  <div
                    className={`h-10 w-9 rounded-md flex flex-col items-center justify-center text-[9px] font-bold tracking-wider ${getBadgeColor(
                      file.type,
                    )}`}
                  >
                    <FileText className="h-3.5 w-3.5 mb-0.5 opacity-80" />
                    <span>{file.type}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#102b1c] leading-tight">
                      {file.name}
                    </p>
                    <p className="text-[12px] text-gray-500 mt-0.5">
                      File size : {file.size}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="h-9 w-9 rounded-lg border border-gray-200/80 bg-white flex items-center justify-center text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
