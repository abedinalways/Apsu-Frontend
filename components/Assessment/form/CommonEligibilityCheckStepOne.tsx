'use client';

import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Trash2, FileText } from 'lucide-react';
import { FormData } from '@/zod/AssessmentSchema';

export default function CommonEligibilityCheckStepOne() {
  const { control, setValue, watch } = useFormContext<FormData>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Watch labReports array (assumes Array<{ id?: string; name: string; size: string; type: string }>)
  const attachments = watch('labReports' as any) || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2).replace('.', ',')} MB`,
        type: file.name.split('.').pop()?.toUpperCase() || 'PDF',
      }));

      setValue('labReports' as any, [...attachments, ...newFiles], {
        shouldValidate: true,
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updated = attachments.filter((_: any, i: number) => i !== index);
    setValue('labReports' as any, updated, { shouldValidate: true });
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
        type: file.name.split('.').pop()?.toUpperCase() || 'PDF',
      }));

      setValue('labReports' as any, [...attachments, ...newFiles], {
        shouldValidate: true,
      });
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'bg-redColor text-white';
      case 'doc':
      case 'docx':
        return 'bg-blueColor text-white';
      default:
        return 'bg-grayColor1 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Medical Team Concerns / Questions Area */}
      <FormField
        control={control}
        name={'medicalConcerns' as any}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[16px] font-semibold text-titleText tracking-tight block">
              Please share any concerns or questions you have for the medical
              team below.
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Describe your concerns if you have any..."
                className="bg-background border-greenColor1  focus-visible:ring-[1px] min-h-35 text-[15px] text-grayColor1 placeholder:text-grayColor1 p-4 rounded-xl resize-y"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Lab Reports Section Header */}
      <div className="space-y-1">
        <h3 className="text-[15px] font-medium text-titleText">
          Do you have any lab reports you'd like to share with the physician?
        </h3>
        <p className="text-[13px] text-grayColor1 leading-relaxed">
          Any additional labs which you upload will not be reviewed. The doctor
          who ordered these labs is responsible for interpreting them.
        </p>
      </div>

      {/* File Dropzone */}
      <FormField
        control={control}
        name={'labReports' as any}
        render={() => (
          <FormItem>
            <FormControl>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="bg-background border border-greenColor1  rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center transition-colors"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  aria-label="Upload lab reports"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="h-12 w-12 rounded-full bg-lightGreenColor flex items-center justify-center cursor-pointer hover:bg-borderColor transition-colors"
                >
                  <Upload className="h-5 w-5 text-titleText" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-titleText">
                    Drag & Drop or{' '}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-titleText underline font-semibold cursor-pointer"
                    >
                      Browse
                    </button>
                  </p>
                  <p className="text-[12px] text-grayColor1 mt-1">
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
          <h3 className="text-[16px] font-medium text-titleText">
            Attachments
          </h3>
          <div className="space-y-2.5">
            {attachments.map((file: any, index: number) => (
              <div
                key={file.id || index}
                className="bg-background border border-greenColor1  rounded-xl p-3.5 flex items-center justify-between"
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
                    <p className="text-[14px] font-medium text-titleText leading-tight">
                      {file.name}
                    </p>
                    <p className="text-[12px] text-grayColor1 mt-0.5">
                      File size : {file.size}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="h-9 w-9 rounded-lg border border-gray-200/80 bg-white flex items-center justify-center text-redColor hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
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
