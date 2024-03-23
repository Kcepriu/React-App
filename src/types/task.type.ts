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
  // status: TaskList;
}
