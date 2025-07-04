"use client";
import { useDraggable } from "@dnd-kit/core";

export default function Drag({ id }: { id: string }) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-2 cursor-pointer border"
    >
      {id}
    </button>
  );
}
