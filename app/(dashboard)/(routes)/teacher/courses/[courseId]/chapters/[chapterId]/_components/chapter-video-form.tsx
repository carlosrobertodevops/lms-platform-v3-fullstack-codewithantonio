'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { ImageIcon, PencilIcon, PlusCircle, Video } from 'lucide-react';

import axios from 'axios';
import toast from 'react-hot-toast';
import Image from 'next/image';
import FileUpload from '@/components/file-upload';
import { Chapter, MuxData } from '@prisma/client';
import { undefined, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface CapterVideoProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

type CapterVideoFormSchemaType = z.infer<typeof formSchema>;

const CapterVideo = ({
  initialData,
  courseId,
  chapterId
}: CapterVideoProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();

  const form = useForm<CapterVideoFormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoUrl: initialData.videoUrl,
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const onSubmit = async (values: { videoUrl: string }) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
      toast.success('Chapter is updated');
      toggleIsEditing();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        Course Image
        <Button variant={'ghost'} onClick={toggleIsEditing}>
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              Add a video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <PencilIcon className='mr-2 h-4 w-4' />
              Edit a video
            </>
          )}
        </Button>
      </div>

      {!isEditing && !initialData.videoUrl ? (
        <div className='flex h-60 items-center justify-center rounded-md bg-slate-200'>
          <ImageIcon className='h-10 w-10 text-slate-500' />
        </div>
      ) : (
        <div className='relative mt-2 aspect-video '>
          Video uploaded!
        </div>
      )}

      {isEditing && (
        <div>
          <FileUpload
            endpoint='courseImage'
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className='mt-4 text-center text-xs text-muted-foreground'>
            Upload this chapter&apos;s video
          </div>
        </div>
      )}
    </div>
  );
};

export default CapterVideo;
