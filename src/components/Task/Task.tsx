import { FC } from "react";
import { FiCalendar } from "react-icons/fi";
import { ITask } from "../../types/task.type";
import ButtonMenuTask from "../ButtonMenuTask/ButtonMenuTask";
import MenuMoveTo from "./MenuMoveTo/MenuMoveTo";
import { formatDate } from "../../helpers/formatDateTime";
import {
  WrapCard,
  WrapHeader,
  WrapDate,
  WrapPriority,
  WrapContend,
  Priority,
} from "./Task.styled";
import { useModalWindow } from "../../hooks/useModalWindow";
import CreateEditTask from "../CreateEditTask/CreateEditTask";
interface IProps {
  task: ITask;
}
const Task: FC<IProps> = ({ task }) => {
  const { name, description, due_date, priority } = task;
  const {
    MobileWindowComponent: MobileWindowComponentEdit,
    setShowModal: setShowModalEdit,
  } = useModalWindow({
    contentComponent: (
      <CreateEditTask
        isEdit={false}
        task={task}
        handleCloseModal={() => setShowModalEdit(false)}
      />
    ),
  });

  const handleOpenTask = () => {
    setShowModalEdit(true);
  };

  return (
    <>
      <WrapCard>
        <WrapHeader>
          <h2>{name}</h2>
          <ButtonMenuTask task={task} />
        </WrapHeader>

        <WrapContend onClick={handleOpenTask}>
          <p>{description}</p>
          <WrapDate>
            <FiCalendar size={24} />
            <p>{formatDate(Number(due_date))}</p>
          </WrapDate>
          <WrapPriority data-status={priority}>
            <Priority>{priority}</Priority>
          </WrapPriority>
        </WrapContend>

        <MenuMoveTo task={task} />
      </WrapCard>
      {MobileWindowComponentEdit}
    </>
  );
};
export default Task;
