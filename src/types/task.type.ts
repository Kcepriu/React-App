import { ITaskList } from "./taskList.type";
import { EmptyTaskList } from "./taskList.type";

export enum TypePriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export enum TypeOperation {
  "POST" = "post",
  "PATCH" = "patch",
  "DELETE" = "delete",
}

export interface ITask {
  id: number;
  name: string;
  description: string;
  due_date: number;
  priority: TypePriority;
  status: ITaskList;
}

export const EmptyTask: ITask = {
  id: 0,
  name: "",
  description: "",
  due_date: Date.now(),
  priority: TypePriority.LOW,
  status: EmptyTaskList,
};
