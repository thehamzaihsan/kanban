import React from "react";
import { TaskModel } from "../utils/models";

type TaskProps = {
    index:number,
    task:TaskModel,
}
export default function Task({index , task}:TaskProps) {
  return (
  <div className={task.color + ' rounded'}>
      <div className="p-2 rounded my-1">{task.title}</div>
  </div>
  );
}
