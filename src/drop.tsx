"use client";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

type Props = {
  id: string;
  children?: React.ReactNode;
};

export function Drop({ id, children }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`border w-[100px] h-[100px] flex items-center justify-center ${
        isOver ? "bg-green-100" : ""
      }`}
    >
      {children}
    </div>
  );
}
