import { FC } from "react";
import HeaderTaskList from "./HeaderTaskList/HeaderTaskList";
import ButtonAddTask from "./ButtonAddTask/ButtonAddTask";
import Task from "../Task/Task";
import { ITaskList } from "../../types/taskList.type";
import { TypePriority } from "../../types/task.type";
import { WrapList, List } from "./TaskList.styled";

interface IProps {
  taskList: ITaskList;
}
const tasks = [
  {
    id: 1,
    name: "Task 1",
    description:
      "description description description description description description description ",
    due_date: 1711196897599,
    priority: TypePriority.LOW,
  },
  {
    id: 2,
    name: "Task 2",
    description:
      "description description description description description description description ",
    due_date: 1711196897599,
    priority: TypePriority.HIGH,
  },
  {
    id: 3,
    name: "Task 3",
    description:
      "description description description description description description description ",
    due_date: 1711196897599,
    priority: TypePriority.MEDIUM,
  },
  {
    id: 4,
    name: "Task 4",
    description:
      "description description description description description description description ",
    due_date: 1711196897599,
    priority: TypePriority.HIGH,
  },
  {
    id: 5,
    name: "Task 5",
    description:
      "description description description description description description description ",
    due_date: 1711196897599,
    priority: TypePriority.LOW,
  },
];

const TaskList: FC<IProps> = ({ taskList }) => {
  return (
    <WrapList>
      <HeaderTaskList taskList={taskList} />
      <ButtonAddTask />
      <List>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </List>
    </WrapList>
  );
};

export default TaskList;
