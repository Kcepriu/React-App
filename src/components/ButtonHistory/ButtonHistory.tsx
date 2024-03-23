import { FC } from "react";
import { FiRotateCcw } from "react-icons/fi";
import { Button } from "./ButtonHistory.styled";

const ButtonHistory: FC = () => {
  return (
    <Button>
      <FiRotateCcw size={24} />
      History
    </Button>
  );
};

export default ButtonHistory;
