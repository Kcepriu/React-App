import { FC } from "react";
import { Button } from "./ButtonAddTask.styled";
import { FiPlus } from "react-icons/fi";

const ButtonAddTask: FC = () => {
  return (
    <Button>
      <FiPlus size={24} />
      Add new card
    </Button>
  );
};

export default ButtonAddTask;
