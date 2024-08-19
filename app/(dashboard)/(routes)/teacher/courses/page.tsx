import { db } from '@/lib/db';
import { isTeacher } from '@/lib/teacher';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";


export const CoursesPage = async () => {
  const { userId }  = auth();

  if (!userId || !isTeacher(userId)) {
    return redirect('/');
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc'
    },
  });

  return (
    <div className='p-6'>
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
