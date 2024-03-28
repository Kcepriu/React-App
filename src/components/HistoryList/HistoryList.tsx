import { FC } from "react";
import { IHistory } from "../../types/history.type";
import HistoryLine from "./HistoryLine/HistoryLine";
import { paramHistoryService } from "../../helpers/formatHistory";
import { WrapContent, List } from "./HistoryList.styled";

interface IProps {
  listHistory: IHistory[];
  isForOneTask?: boolean;
}

const HistoryList: FC<IProps> = ({ listHistory, isForOneTask = false }) => {
  const paramsHistory = listHistory.map((lineHistory) =>
    paramHistoryService.createParamHistory(lineHistory, isForOneTask)
  );

  return (
    <WrapContent>
      <List>
        {paramsHistory.map((paramHistory, key) =>
          paramHistory.operations.map((operationHistory) => (
            <li key={key}>
              <HistoryLine
                paramHistory={paramHistory}
                operationHistory={operationHistory}
                isForOneTask={isForOneTask}
              />
            </li>
          ))
        )}
      </List>
    </WrapContent>
  );
};

export default HistoryList;
