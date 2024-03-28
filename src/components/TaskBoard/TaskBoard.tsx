import { FC, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import { useTaskList } from "../../stores/taskList.store";
import { showErrorMessage } from "../../helpers/message";
import { List, ElementList } from "./TaskBoard.styled";

const TaskBoard: FC = () => {
  const [tasksList] = useTaskList((state) => [state.tasksList]);

  // TODO
  // const [tasksList, isError, messageError] = useTaskList((state) => [
  //   state.tasksList,
  //   state.isError,
  //   state.messageError,
  // ]);

  // useEffect(() => {
  //   isError && showErrorMessage(messageError);
  // }, [isError, messageError]);

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
