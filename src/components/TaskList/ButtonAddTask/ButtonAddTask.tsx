import { FC } from "react";
import { Button } from "./ButtonAddTask.styled";
import { FiPlus } from "react-icons/fi";
import CreateEditTask from "../../CreateEditTask/CreateEditTask";
import { useModalWindow } from "../../../hooks/useModalWindow";

const ButtonAddTask: FC = () => {
  const { MobileWindowComponent, setShowModal } = useModalWindow({
    contentComponent: <CreateEditTask />,
  });

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FiPlus size={24} />
        Add new card
      </Button>
      {MobileWindowComponent}
    </>
  );
};

export default ButtonAddTask;
