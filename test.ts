const pathname = '/teacher/courses/a/b/c';
const href = '/teacher/courses';

const isActive = pathname?.startsWith(`${href}`);

console.log({ isActive });
