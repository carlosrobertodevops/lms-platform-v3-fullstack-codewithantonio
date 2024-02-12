import IconBadge from '@/components/icon-badge';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { CircleDollarSign, LayoutDashboard, ListChecks } from 'lucide-react';
import { redirect } from 'next/navigation';
import TitleForm from './_components/title-form';
import DescriptionForm from './_components/description-form';
import ImageForm from './_components/image-form';
import CategoryForm from './_components/category-form';
import PriceForm from './_components/price-form';

interface CourseIdPageProps {
  params: {
    courseId: string;
  };
}

const CourseIdPage = async ({ params }: CourseIdPageProps) => {
  const { courseId } = params;
  const { userId } = auth();

  const course = await db.course.findUnique({ where: { id: courseId } });
  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  if (!course || userId !== course.userId) {
    return redirect('/');
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter((field) =>
    Boolean(field),
  ).length;
  const completionText = `${completedFields}/${totalFields}`;

  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-2xl font-medium'>Course Setup</h1>
          <span className='text-sm text-slate-700'>
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* Section `Customize your course` starts */}
        <div>
          <div className='flex items-center gap-x-2'>
            <IconBadge icon={LayoutDashboard} />
            <h2 className='text-xl'>Customize your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
          <CategoryForm
            initialData={course}
            courseId={course.id}
            categories={categories}
          />
        </div>
        {/* Section `Customize your course` ends */}
        <div className='space-y-6'>
          {/* Section `Course Chapters` starts */}
          <div>
            <div className='flex items-center gap-x-2'>
              <IconBadge icon={ListChecks} />
              <h2 className='text-xl'>Course Chapters</h2>
            </div>
          </div>
          {/* Section `Course Chapters` ends */}
          {/* Section `Sell your course` starts */}
          <div>
            <div className='flex items-center gap-x-2'>
              <IconBadge icon={CircleDollarSign} />
              <h2 className='text-xl'>Sell your course</h2>
            </div>
            <PriceForm initialData={course} courseId={course.id} />
          </div>
          {/* Section `Sell your course` ends */}
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
