import { FC, useEffect, useState } from "react";
import HistoryList from "../HistoryList/HistoryList";
import { ITask, TypePriority } from "../../types/task.type";
import { formatDate } from "../../helpers/formatDateTime";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { LiaShirtsinbulk } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import {
  WrapPage,
  WrapTask,
  WrapHistory,
  LineInformation,
  TitleLine,
  WrapInformation,
  TitleDescription,
  WrapDescription,
  WrapTitle,
  Button,
} from "./CreateEditTask.styled";
interface IProps {
  isEdit: boolean;
  task: ITask;
}

const CreateEditTask: FC<IProps> = ({ isEdit, task }) => {
  const { id, name, description, due_date, priority } = task;

  const [onlyView, setOnlyView] = useState(true);

  useEffect(() => setOnlyView(!isEdit), [isEdit, setOnlyView]);

  const handleEditTask = () => {
    setOnlyView(false);
  };

  const handleSaveTask = () => {
    console.log("Save task");
    setOnlyView(true);
  };

  return (
    <WrapPage>
      <WrapTask>
        <WrapTitle>
          <h2>{name}</h2>
          {onlyView ? (
            <Button onClick={handleEditTask}>
              <FiEdit size={16} />
              Edit Task
            </Button>
          ) : (
            <Button onClick={handleSaveTask}>
              <FiSave size={16} />
              Save Task
            </Button>
          )}
        </WrapTitle>

        <WrapInformation>
          <LineInformation>
            <TitleLine>
              <LiaCrosshairsSolid size={24} />
              Status
            </TitleLine>
            <p>{priority} ERROR</p>
          </LineInformation>

          <LineInformation>
            <TitleLine>
              <LuCalendar size={24} />
              Due date
            </TitleLine>
            <p>{formatDate(due_date)}</p>
          </LineInformation>

          <LineInformation>
            <TitleLine>
              <LiaShirtsinbulk size={24} />
              Priority
            </TitleLine>
            <p>{priority}</p>
          </LineInformation>
        </WrapInformation>
        <TitleDescription>Description</TitleDescription>
        <WrapDescription>
          <p>{description}</p>
        </WrapDescription>
      </WrapTask>
      <WrapHistory>
        <h2>Activity</h2>
        <HistoryList />
      </WrapHistory>
    </WrapPage>
  );
};

export default CreateEditTask;
