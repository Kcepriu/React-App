import { FC, useEffect, useState } from "react";
import { ITaskList } from "../../types/taskList.type";
import ViewTaskList from "./ViewTaskList/ViewTaskList";
import EditTaskList from "./EditTaskList/EditTaskList";
import { WrapPage } from "./CreateEditTaskList.styled";

interface IProps {
  isEdit: boolean;
  taskList: ITaskList;
}

const CreateEditTaskList: FC<IProps> = ({ isEdit, taskList }) => {
  const [onlyView, setOnlyView] = useState(true);

  useEffect(() => setOnlyView(!isEdit), [isEdit, setOnlyView]);

  const handleEdit = () => {
    setOnlyView(false);
  };

  const handleSave = () => {
    console.log("Save task 1");
    setOnlyView(true);
  };

  return (
    <WrapPage>
      {onlyView ? (
        <ViewTaskList taskList={taskList} handleEdit={handleEdit} />
      ) : (
        <EditTaskList taskList={taskList} handleSave={handleSave} />
      )}
    </WrapPage>
  );
};

export default CreateEditTaskList;
