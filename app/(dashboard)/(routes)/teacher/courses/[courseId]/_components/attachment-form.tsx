'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

import axios from 'axios';
import toast from 'react-hot-toast';
import FileUpload from '@/components/file-upload';
import { Attachment, Course } from '@prisma/client';

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const onSubmit = async (values: { url: string }) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success('Course is updated');
      toggleIsEditing();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        Course Attachments
        <Button variant={'ghost'} onClick={toggleIsEditing}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              Add
            </>
          )}
        </Button>
      </div>

      {isEditing && (
        <>
          <FileUpload
            endpoint='courseAttachment'
            onChange={(url) => onSubmit({ url })}
          />
          <p className='mt-4 text-center text-xs text-muted-foreground'>
            Add anything your students might to complete the course
          </p>
        </>
      )}

      {!isEditing && initialData.attachments.length === 0 && (
        <p className='mt-2 text-sm italic text-slate-500'>No attachments yet</p>
      )}
    </div>
  );
};

export default AttachmentForm;
