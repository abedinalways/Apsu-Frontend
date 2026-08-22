'use client';

import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Upload, Trash2, CheckCircle2, FileVideo } from 'lucide-react';
import { FormData } from '@/zod/AssessmentSchema';

export default function EligibilityStepFive() {
  const { control, setValue, watch } = useFormContext<FormData>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Watch videoAttachments array (assumes Array<{ id?: string; name: string; size: string; type: string }>)
  const attachments = watch('videoAttachments' as any) || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2).replace('.', ',')} MB`,
        type: file.name.split('.').pop()?.toUpperCase() || 'MP4',
      }));

      setValue('videoAttachments' as any, [...attachments, ...newFiles], {
        shouldValidate: true,
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updated = attachments.filter((_: any, i: number) => i !== index);
    setValue('videoAttachments' as any, updated, { shouldValidate: true });
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
        type: file.name.split('.').pop()?.toUpperCase() || 'MP4',
      }));

      setValue('videoAttachments' as any, [...attachments, ...newFiles], {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner Image */}
      <div className="relative w-full h-55 rounded-2xl overflow-hidden">
        <Image
          src="/images/video-recording-guide.jpg" // Replace with your image asset path
          alt="Video recording guidance"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title & Description */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c] tracking-tight">
          Upload a Short Video
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5 leading-relaxed">
          Please record a short video of yourself and stand two full steps away
          from your device or hold your camera at arm's length.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Recording Instructions Checklist */}
      <div className="space-y-3">
        <h3 className="text-[15px] font-medium text-[#102b1c]">
          Before recording:
        </h3>
        <ul className="space-y-2.5">
          <li className="flex items-center gap-2.5 text-[14px] text-[#3b3b3c]">
            <CheckCircle2 className="h-4 w-4 text-[#102b1c] fill-[#102b1c] stroke-white shrink-0" />
            <span>State your full name</span>
          </li>
          <li className="flex items-center gap-2.5 text-[14px] text-[#3b3b3c]">
            <CheckCircle2 className="h-4 w-4 text-[#102b1c] fill-[#102b1c] stroke-white shrink-0" />
            <span>State your date of birth</span>
          </li>
          <li className="flex items-center gap-2.5 text-[14px] text-[#3b3b3c]">
            <CheckCircle2 className="h-4 w-4 text-[#102b1c] fill-[#102b1c] stroke-white shrink-0" />
            <span>Conditions or symptoms you are consulting for</span>
          </li>
        </ul>
      </div>

      {/* Video Dropzone */}
      <FormField
        control={control}
        name={'videoAttachments' as any}
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
                  accept=".mp4,.mov"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="h-12 w-12 rounded-full bg-[#dbe5de] flex items-center justify-center cursor-pointer hover:bg-[#cfded3] transition-colors"
                >
                  <Upload className="h-5 w-5 text-[#102b1c]" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-[#102b1c]">
                    Upload Video or{' '}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[#102b1c] underline font-semibold cursor-pointer"
                    >
                      Browse
                    </button>
                  </p>
                  <p className="text-[12px] text-gray-500 mt-1">
                    MP4, MOV (Max 100MB)
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
                  {/* Video Badge Icon */}
                  <div className="h-10 w-9 rounded-md bg-[#22c55e] text-white flex flex-col items-center justify-center text-[9px] font-bold tracking-wider">
                    <FileVideo className="h-3.5 w-3.5 mb-0.5 opacity-90" />
                    <span>{file.type || 'MP4'}</span>
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
