"use client";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Drag from "./drag";
import { Drop } from "./drop";

const initialRows = [
  { id: "row-1", player: "" },
  { id: "row-2", player: "" },
  { id: "row-3", player: "" },
  { id: "row-4", player: "" },
  { id: "row-5", player: "" },
  { id: "row-6", player: "" },
  { id: "row-7", player: "" },
  { id: "row-8", player: "" },
  { id: "row-9", player: "" },
];

const initPlayers = [
  { id: "p-1", color: "green", place: "stage-1" },
  { id: "p-2", color: "green", place: "stage-1" },
  { id: "p-3", color: "green", place: "stage-1" },
  { id: "p-4", color: "skyblue", place: "stage-2" },
  { id: "p-5", color: "skyblue", place: "stage-2" },
  { id: "p-6", color: "skyblue", place: "stage-2" },
];
export default function App() {
  const [row, setRow] = useState(initialRows);
  const [players, setPlayers] = useState(initPlayers);
  useEffect(() => {
    console.log(players);
  }, [players]);
  useEffect(() => {
    console.log(row);
  }, [row]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const playerId = active.id as string;
    const rowId = over?.id as string | null;

    if (!rowId) return;
    if (players.find((player) => player.place === rowId)) return; // if the player have the same row
    setRow(
      (prevRows) =>
        prevRows
          .map(
            (row) => (row.player === playerId ? { ...row, player: "" } : row) // remove the player from all row
          )
          .map((row) => (row.id === rowId ? { ...row, player: playerId } : row)) // update the player to the row
    );
    setPlayers((prevPlayer) =>
      prevPlayer.map(
        (player) =>
          player.id === playerId ? { ...player, place: rowId } : player // update the place of player
      )
    );
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* stage 1*/}
      <div className="flex gap-10 justify-between p-4">
        <Drop id="stage-1">
          {players
            .filter((player) => player.place === "stage-1")
            .map((player) => (
              <Drag color={player.color} id={player.id} key={player.id} />
            ))}
        </Drop>
        {/* stage 2 */}
        <Drop id="stage-2">
          {players
            .filter((player) => player.place === "stage-2")
            .map((player) => (
              <Drag color={player.color} id={player.id} key={player.id} />
            ))}
        </Drop>
      </div>

      <div className="p-4 max-w-sm gap-10 grid grid-cols-3 mx-auto mt-20 border rounded">
        {row.map((item) => (
          <Drop key={item.id} id={item.id}>
            {players
              .filter((player) => player.id === item.player)
              .map((player) => (
                <Drag id={player.id} color={player.color} key={player.id} />
              ))}
          </Drop>
        ))}
      </div>
    </DndContext>
  );
}
