import { FC } from "react";
import { ITask } from "../../../types/task.type";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { LiaShirtsinbulk } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { formatDate } from "../../../helpers/formatDateTime";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";
import {
  LineInformation,
  TitleLine,
  WrapInformation,
  TitleDescription,
  WrapDescription,
  WrapTitle,
} from "./ViewTask.styled";

interface IProps {
  task: ITask;
  handleEditTask: () => void;
}
const ViewTask: FC<IProps> = ({ task, handleEditTask }) => {
  const { name, description, due_date, priority } = task;
  return (
    <>
      <WrapTitle>
        <h2>{name}</h2>
        <ButtonEditSave
          handleButton={handleEditTask}
          title="Edit Task"
          isEdit
        />
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
    </>
  );
};

export default ViewTask;
