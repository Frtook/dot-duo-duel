"use client";
import { useDraggable } from "@dnd-kit/core";

export default function Drag({ id, color }: { id: string; color?: string }) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
  });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    backgroundColor: color,
  };

  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-6 rounded-full cursor-pointer  "
      style={style}
    ></button>
  );
}
