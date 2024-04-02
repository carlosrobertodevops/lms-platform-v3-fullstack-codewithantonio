'use client';

import { Chapter } from '@prisma/client';

interface SortableItemProps {
  chapter: Chapter;
  isUpdating: boolean;
  onEdit: (id: string) => void;
}

const SortableItem = ({ chapter, isUpdating, onEdit }: SortableItemProps) => {
  const { title } = chapter;
  return <div>{title}</div>;
};

export default SortableItem;
