import { FC } from "react";
import { ITaskList } from "../../../types/taskList.type";
import { FiMoreVertical } from "react-icons/fi";
import { WrapHeader, WrapRight, Button } from "./HeaderTaskList.syled";

interface IProps {
  taskList: ITaskList;
}

const HeaderTaskList: FC<IProps> = ({ taskList }) => {
  const { name, count } = taskList;
  return (
    <WrapHeader>
      <p>{name}</p>
      <WrapRight>
        <p>{count}</p>
        <Button>
          <FiMoreVertical size={24} />
        </Button>
      </WrapRight>
    </WrapHeader>
  );
};

export default HeaderTaskList;
