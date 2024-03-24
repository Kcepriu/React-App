import { FC } from "react";
import { ITaskList } from "../../../types/taskList.type";
import { WrapHeader, WrapRight } from "./HeaderTaskList.syled";
import ButtonMenuHeader from "./ButtonMenuHeader/ButtonMenuHeader";
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
        <ButtonMenuHeader />
      </WrapRight>
    </WrapHeader>
  );
};

export default HeaderTaskList;
