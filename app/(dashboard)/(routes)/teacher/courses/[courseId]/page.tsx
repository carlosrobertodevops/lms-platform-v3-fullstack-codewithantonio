interface CourseIdPageProps {
  params: {
    courseId: string;
  };
}

const CourseIdPage = ({ params }: CourseIdPageProps) => {
  const { courseId } = params;

  return <div>{courseId}</div>;
};

export default CourseIdPage;
