import { FC } from "react";
import { FiCalendar } from "react-icons/fi";
import { ITask } from "../../types/task.type";
import { FiMoreVertical } from "react-icons/fi";
import { formatDate } from "../../helpers/formatDateTime";
import { WrapCard, Button, WrapHeader, WrapDate } from "./Task.styled";

interface IProps {
  task: ITask;
}
const Task: FC<IProps> = ({ task }) => {
  const { name, description, due_date, priority } = task;
  return (
    <WrapCard>
      <WrapHeader>
        <h2>{name}</h2>
        <Button>
          <FiMoreVertical size={24} />
        </Button>
      </WrapHeader>

      <p>{description}</p>
      <WrapDate>
        <FiCalendar size={24} />
        {formatDate(due_date)}
      </WrapDate>
      <p>{priority}</p>
      <p>Move to</p>
    </WrapCard>
  );
};
export default Task;
