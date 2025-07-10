"use client";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "./lib/utils";
import type { TPlyaer } from "./types";
type Props = {
  id: string;
  color?: string;
  data: TPlyaer;
  className?: string;
};
export default function Drag({ id, color, className, data }: Props) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
    data,
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
      className={cn("p-6 rounded-full cursor-pointer size-14 ", className)}
      style={style}
    ></button>
  );
}
