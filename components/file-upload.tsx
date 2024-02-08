'use client';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

interface FileUploadProps {
  endpoint: keyof OurFileRouter;
  onChange: (url: string) => void;
}

const FileUpload = ({ endpoint, onChange }: FileUploadProps) => {
  return <div></div>;
};

export default FileUpload;
