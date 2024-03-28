import { FC, useEffect, useState } from "react";
import HistoryListTask from "../HistoryListTask/HistoryListTask";
import { ITask } from "../../types/task.type";
import { WrapPage, WrapTask, WrapHistory } from "./CreateEditTask.styled";
import ViewTask from "./ViewTask/ViewTask";
import EditTask from "./EditTask/EditTask";

interface IProps {
  isEdit: boolean;
  task: ITask;
  handleCloseModal: () => void;
  isCloseWindowAfterSave?: boolean;
}

const CreateEditTask: FC<IProps> = ({
  isEdit,
  task,
  handleCloseModal,
  isCloseWindowAfterSave = false,
}) => {
  const [onlyView, setOnlyView] = useState(true);

  useEffect(() => setOnlyView(!isEdit), [isEdit, setOnlyView]);

  const handleEditTask = () => {
    setOnlyView(false);
  };

  const handleSaveTask = () => {
    isCloseWindowAfterSave ? handleCloseModal() : setOnlyView(true);
  };

  return (
    <WrapPage>
      <WrapTask>
        {onlyView ? (
          <ViewTask task={task} handleEditTask={handleEditTask} />
        ) : (
          <EditTask task={task} handleSaveTask={handleSaveTask} />
        )}
      </WrapTask>
      <WrapHistory>
        <h2>Activity</h2>
        <HistoryListTask task={task} />
      </WrapHistory>
    </WrapPage>
  );
};

export default CreateEditTask;
