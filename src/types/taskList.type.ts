export interface ITaskList {
  id: number;
  name: string;
  count: number;
}

export const EmptyTaskList: ITaskList = {
  id: 0,
  name: "",
  count: 0,
};
