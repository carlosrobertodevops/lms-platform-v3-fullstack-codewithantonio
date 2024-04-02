'use client';

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
      {title}
    </div>
  );
};

export default SortableItem;
