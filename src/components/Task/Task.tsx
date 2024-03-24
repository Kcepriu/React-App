import { FC } from "react";
import { FiCalendar } from "react-icons/fi";
import { ITask } from "../../types/task.type";
import ButtonMenuTask from "../ButtonMenuTask/ButtonMenuTask";
import MenuMoveTo from "./MenuMoveTo/MenuMoveTo";
import { formatDate } from "../../helpers/formatDateTime";
import { WrapCard, WrapHeader, WrapDate, WrapPriority } from "./Task.styled";

interface IProps {
  task: ITask;
}
const Task: FC<IProps> = ({ task }) => {
  const { name, description, due_date, priority } = task;
  return (
    <WrapCard>
      <WrapHeader>
        <h2>{name}</h2>
        <ButtonMenuTask />
      </WrapHeader>

      <p>{description}</p>
      <WrapDate>
        <FiCalendar size={24} />
        <p>{formatDate(due_date)}</p>
      </WrapDate>
      <WrapPriority data-status={priority}>
        <p>{priority}</p>
      </WrapPriority>

      <MenuMoveTo />
    </WrapCard>
  );
};
export default Task;
