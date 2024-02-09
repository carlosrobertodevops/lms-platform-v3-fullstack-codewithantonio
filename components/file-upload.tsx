'use client';

import type { OurFileRouter } from '@/app/api/uploadthing/core';
import { UploadDropZone } from '@/lib/uploadthing';
import toast from 'react-hot-toast';

interface FileUploadProps {
  endpoint: keyof OurFileRouter;
  onChange: (url: string) => void;
}

const FileUpload = ({ endpoint, onChange }: FileUploadProps) => {
  return (
    <UploadDropZone
      endpoint={endpoint}
      onClientUploadComplete={(response) => {
        onChange(response[0].url);
      }}
      onUploadError={(error: Error) => {
        toast.error('Something went wrong');
        console.log('[UPLOADTHING]', error.message);
      }}
    />
  );
};

export default FileUpload;
