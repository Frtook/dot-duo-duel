"use client";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { cn } from "./lib/utils";

type Props = {
  id: string;
  children?: React.ReactNode;
  className?: string;
};

export function Drop({ id, children, className }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });
  return (
    <div
      ref={setNodeRef}
      className={cn(
        `border w-full h-[100px] flex items-center justify-center ${className}`,
        {
          "bg-gray-300": isOver,
        }
      )}
    >
      {children}
    </div>
  );
}
