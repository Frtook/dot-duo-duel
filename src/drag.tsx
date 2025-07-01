"use client";
import { useDraggable } from "@dnd-kit/core";

export default function Drag() {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: "draggable-1", // use a string
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
      my button
    </button>
  );
}
