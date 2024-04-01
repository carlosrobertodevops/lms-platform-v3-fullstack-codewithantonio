'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { File, Loader2, PlusCircle, X } from 'lucide-react';

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
  const [idToDelete, setIdToDelete] = useState('');
  const router = useRouter();

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const onSubmit = async (values: { url: string }) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success('Course is updated');
      toggleIsEditing();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const onDelete = async (id: string) => {
    try {
      setIdToDelete(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success('Attachment is deleted');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIdToDelete('');
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

      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className='mt-2 text-sm italic text-slate-500'>
              No attachments yet
            </p>
          )}

          {initialData.attachments.length !== 0 && (
            <div className='space-y-2'>
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className='flex w-full items-center rounded-md border border-sky-200 bg-sky-100 p-3 text-sky-700'>
                  <File className='mr-2 h-4 w-4 flex-shrink-0' />
                  <p className='mr-2 line-clamp-1 text-xs'>{attachment.name}</p>
                  {idToDelete === attachment.id ? (
                    <Loader2 className='ml-auto h-4 w-4 animate-spin' />
                  ) : (
                    <button
                      className='ml-auto transition hover:opacity-75'
                      onClick={() => onDelete(attachment.id)}>
                      <X className='h-4 w-4' />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AttachmentForm;
