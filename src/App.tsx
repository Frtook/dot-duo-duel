"use client";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Drag from "./drag";
import { Drop } from "./drop";

const initialRows = [
  { id: "row-1", hasDot: false },
  { id: "row-2", hasDot: false },
  { id: "row-3", hasDot: false },
];
export default function App() {
  const [row, setRow] = useState(initialRows);

  const handleDragEnd = ({ over }: DragEndEvent) => {
    setRow((prevRows) =>
      prevRows.map((row) => ({
        ...row,
        hasDot: over?.id === row.id,
      }))
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-4 mx-auto mt-20 border rounded flex gap-4">
        {row.every((item) => !item.hasDot) && <Drag />}
        {row.map((item) => (
          <Drop id={item.id}>{item.hasDot && <Drag />}</Drop>
        ))}
      </div>
    </DndContext>
  );
}
