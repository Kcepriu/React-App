import { FC, useEffect, useState } from "react";
import httpServices from "../../service/http";
import { IHistory } from "../../types/history.type";
import { showErrorMessage } from "../../helpers/message";
import { useTaskList } from "../../stores/taskList.store";

const HistoryListAll: FC = () => {
  const [setIsLoad] = useTaskList((state) => [state.setIsLoad]);

  const [listHistory, setListHistory] = useState<IHistory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoad(true);
      try {
        const { code, data } = await httpServices.fetchAllHistory();
        setListHistory(code !== 200 ? [] : data);
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

export default HistoryListAll;