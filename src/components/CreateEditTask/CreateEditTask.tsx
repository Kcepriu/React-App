import { FC, useEffect, useState } from "react";
import HistoryList from "../HistoryList/HistoryList";
import { ITask } from "../../types/task.type";
import { WrapPage, WrapTask, WrapHistory } from "./CreateEditTask.styled";
import ViewTask from "./ViewTask/ViewTask";
import EditTask from "./EditTask/EditTask";

interface IProps {
  isEdit: boolean;
  task: ITask;
}

const CreateEditTask: FC<IProps> = ({ isEdit, task }) => {
  const [onlyView, setOnlyView] = useState(true);

  useEffect(() => setOnlyView(!isEdit), [isEdit, setOnlyView]);

  const handleEditTask = () => {
    setOnlyView(false);
  };

  const handleSaveTask = () => {
    console.log("Save task 1");
    setOnlyView(true);
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
        <HistoryList />
      </WrapHistory>
    </WrapPage>
  );
};

export default CreateEditTask;
