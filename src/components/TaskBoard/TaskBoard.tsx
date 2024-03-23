import { FC } from "react";
import TaskList from "../TaskList/TaskList";
import { List, ElementList } from "./TaskBoard.styled";

const tasksList = [
  { id: 1, name: "To Do", count: 10 },
  { id: 2, name: "Planet", count: 10 },
  { id: 3, name: "In Progress", count: 10 },
  { id: 4, name: "Closed", count: 10 },
];

const TaskBoard: FC = () => {
  return (
    <div>
      <List>
        {tasksList.map((element) => (
          <ElementList key={element.id}>
            <TaskList taskList={element} />
          </ElementList>
        ))}
      </List>
    </div>
  );
};

export default TaskBoard;
