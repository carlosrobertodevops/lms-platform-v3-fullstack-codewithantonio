'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Chapter } from '@prisma/client';
import { Grip, Pencil } from 'lucide-react';

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
        <div
          {...attributes}
          {...listeners}
          className={cn(
            'rounded-l-md px-2 py-3 transition active:bg-slate-300',
            isPublished && 'active:bg-sky-200',
          )}>
          <Grip className='h-5 w-5' />
        </div>
        {title}
        <div className='ml-auto flex items-center gap-x-2 pr-2'>
          {isFree && <Badge>Free</Badge>}
          {isPublished && <Badge className='bg-sky-700'>Published</Badge>}
          {!isPublished && <Badge className='bg-slate-500'>Draft</Badge>}
          <Pencil
            className='h-4 w-4 cursor-pointer transition hover:opacity-75'
            onClick={() => onEdit(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
