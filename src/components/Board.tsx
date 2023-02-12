import React from "react";
import { BoardType } from "../utils/enums";
import { TaskModel } from "../utils/models";
import Task from "./Task";

type BoardProps = {
  type: string;
};

export default function Board({ type }: BoardProps) {
  const mockTasks: TaskModel[] = [
    {
      id: "1",
      title: "Task",
      board: BoardType.TO_DO,
      color: "bg-blue-300",
    },
    {
      id: "2",
      title: "Task",
      board: BoardType.TO_DO,
      color: "bg-orange-300",
    },
    {
      id: "3",
      title: "Task",
      board: BoardType.TO_DO,
      color: "bg-green-300",
    },
  ];

  return (
    <div className="Board bg-blue w-max p-2 rounded transparent text-white">
      <h1>{type}</h1>
      <div>
          {
              mockTasks.map((task, index)=>(
                    <Task task={task}  index={index} />
              ))
          }</div>
    </div>
  );
}
