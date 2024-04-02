'use client';

import { cn } from '@/lib/utils';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Chapter } from '@prisma/client';

interface SortableItemProps {
  chapter: Chapter;
  isUpdating: boolean;
  onEdit: (id: string) => void;
}

const SortableItem = ({ chapter, isUpdating, onEdit }: SortableItemProps) => {
  const { title, id, isPublished, isFree } = chapter;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled: isUpdating });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style}>
      <div
        className={cn(
          'mb-4 flex items-center gap-x-2 rounded-md border border-slate-200 bg-slate-200 text-sm text-slate-700',
          isPublished && 'border-sky-200 bg-sky-100 text-sky-700',
        )}>
        {title}
      </div>
    </div>
  );
};

export default SortableItem;
