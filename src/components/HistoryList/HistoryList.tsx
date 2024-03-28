import { FC, useEffect, useState } from "react";
import { ITask } from "../../types/task.type";
import httpServices from "../../service/http";
import { useTaskList } from "../../stores/taskList.store";
import { showErrorMessage } from "../../helpers/message";
import { IHistory } from "../../types/history.type";

interface IProps {
  task: ITask;
}

const HistoryList: FC<IProps> = ({ task }) => {
  const { id } = task;
  const [setIsLoad] = useTaskList((state) => [state.setIsLoad]);

  const [listHistory, setListHistory] = useState<IHistory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoad(true);
      try {
        const { code, data } = await httpServices.fetchTaskWithHistory(id);
        setListHistory(code === 200 && !!data ? data.histories : []);
      } catch (error) {
        setListHistory([]);
        showErrorMessage("Error fetch history task");
      } finally {
        setIsLoad(false);
      }
    };

    fetchData();
  }, [setIsLoad]);

  return (
    <>
      <ul>
        {listHistory.map((element) => (
          <li key={element.id}>{element.nameTask}</li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;
