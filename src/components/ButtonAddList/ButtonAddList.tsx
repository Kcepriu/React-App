import { FC } from "react";
import { FiPlus } from "react-icons/fi";
import { useModalWindow } from "../../hooks/useModalWindow";
import CreateEditTaskList from "../CreateEditTaskList/CreateEditTaskList";
import { Button } from "./ButtonAddList.styled";

const ButtonAddList: FC = () => {
  const { MobileWindowComponent, setShowModal } = useModalWindow({
    contentComponent: <CreateEditTaskList />,
  });

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FiPlus size={24} />
        Create new list
      </Button>
      {MobileWindowComponent}
    </>
  );
};

export default ButtonAddList;
