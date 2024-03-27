import { FC } from "react";
import { Select } from "./MenuMoveTo.styled";
import { ITask } from "../../../types/task.type";
import { useTaskList } from "../../../stores/taskList.store";

interface IProps {
  task: ITask;
}
const MenuMoveTo: FC<IProps> = ({ task }) => {
  const [onlyTasksList] = useTaskList((state) => [state.onlyTasksList]);

  const handleOnChange = (event: any) => {
    const newValue = onlyTasksList.find(
      (taskList) => taskList.id === Number(event.target.value)
    );
    // TODO save Task
    !!newValue && console.log("to ", newValue);
  };

  return (
    <>
      <Select name="moveTo" onChange={handleOnChange}>
        <option value="" disabled selected hidden>
          Move to:
        </option>
        {onlyTasksList.map((taskList) =>
          taskList.id === task.status.id ? null : (
            <option value={taskList.id} key={taskList.id}>
              {taskList.name}
            </option>
          )
        )}
      </Select>
    </>
  );
};

export default MenuMoveTo;
