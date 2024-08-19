import { isTeacher } from '@/lib/teacher';
import { auth } from '@clerk/nextjs/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  const isAutorized = isTeacher(userId);

  if (!userId || !isAutorized) {
    throw new UploadThingError('Unauthorized');
  }

  return { userId };
};

export const ourFileRouter = {
  // Set permissions and file types for this FileRoute
  courseImage: f({ image: { maxFileSize: '16MB', maxFileCount: 1 } })
    // This code runs on your server before upload
    .middleware(() => handleAuth())
    // Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    .onUploadComplete(() => {}),

  courseAttachment: f({
    image: { maxFileSize: '16MB' },
    pdf: { maxFileSize: '16MB' },
    audio: { maxFileSize: '16MB' },
    text: { maxFileSize: '16MB' },
    video: { maxFileSize: '1GB' },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),

  chapterVideo: f({ video: { maxFileSize: '1GB', maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
