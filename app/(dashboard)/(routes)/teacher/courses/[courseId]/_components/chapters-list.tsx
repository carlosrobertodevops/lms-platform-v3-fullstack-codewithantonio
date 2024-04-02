'use client';

import { Chapter } from '@prisma/client';
import { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './sortable-item';

interface ChaptersListProps {
  items: Chapter[];
  isUpdating: boolean;
  onEdit: (id: string) => void;
  onReorder: (updatedOrder: { id: string; position: number }[]) => void;
}

const ChaptersList = ({
  items,
  isUpdating,
  onEdit,
  onReorder,
}: ChaptersListProps) => {
  const [isClient, setIsClient] = useState(false);
  const [chapters, setChapters] = useState(items);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setChapters(items);
  }, [items]);

  if (!isClient) {
    return null;
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    let updatedOrder: { id: string; position: number }[] | undefined;

    if (over && active.id !== over.id) {
      setChapters((prevChapters) => {
        const oldIndex = prevChapters.findIndex(
          (chapter) => chapter.id === active.id,
        );

        const newIndex = prevChapters.findIndex(
          (chapter) => chapter.id === over.id,
        );

        const updatedChapters = arrayMove(prevChapters, oldIndex, newIndex);
        updatedOrder = updatedChapters.map((chapter, index) => ({
          id: chapter.id,
          position: ++index,
        }));
        return updatedChapters;
      });

      if (updatedOrder) {
        onReorder(updatedOrder);
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={chapters} strategy={verticalListSortingStrategy}>
        {chapters.map((chapter) => (
          <SortableItem
            key={chapter.id}
            chapter={chapter}
            onEdit={onEdit}
            isUpdating={isUpdating}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default ChaptersList;
