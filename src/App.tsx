"use client";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Drag from "./drag";
import { Drop } from "./drop";

const initialRows = [
  { id: "row-1", hasDot: false, player: "" },
  { id: "row-2", hasDot: false, player: "" },
  { id: "row-3", hasDot: false, player: "" },
  { id: "row-4", hasDot: false, player: "" },
  { id: "row-5", hasDot: false, player: "" },
  { id: "row-6", hasDot: false, player: "" },
  { id: "row-7", hasDot: false, player: "" },
  { id: "row-8", hasDot: false, player: "" },
  { id: "row-9", hasDot: false, player: "" },
];

const players = [
  { id: "p-1", place: "stage-1" },
  { id: "p-2", place: "stage-1" },
  { id: "p-3", place: "stage-1" },
  { id: "p-4", place: "stage-2" },
  { id: "p-5", place: "stage-2" },
  { id: "p-6", place: "stage-2" },
];
export default function App() {
  const [row, setRow] = useState(initialRows);

  const handleDragEnd = ({ over }: DragEndEvent) => {
    setRow((prevRows) =>
      prevRows.map((row) => ({
        ...row,
        hasDot: over?.id === row.id,
        player: row.player,
      }))
    );
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* stage 1*/}
      <Drop id="stage-1">
        {players
          .filter((player) => player.place === "stage-1")
          .map((player) => (
            <Drag id={player.id} key={player.id} />
          ))}
      </Drop>
      {/* stage 2 */}
      <Drop id="stage-2">
        {players
          .filter((player) => player.place === "stage-2")
          .map((player) => (
            <Drag id={player.id} key={player.id} />
          ))}
      </Drop>

      <div className="p-4 items-center grid grid-cols-3 mx-auto mt-20 border rounded gap-4">
        {row.map((item) => (
          <Drop key={item.id} id={item.id}>
            {item.hasDot && <Drag id={item.id} />}
          </Drop>
        ))}
      </div>
    </DndContext>
  );
}
